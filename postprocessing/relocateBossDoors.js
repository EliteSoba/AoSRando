const AoSParsingUtils = require('../processing/AoSParsingUtils');
const DataUtils = require('../utils/DataUtils');
const FileUtils = require('../utils/FileUtils');
const AoSConstants = require('../utils/AoSConstants')

const Logger = require('../debug/Logger');
const DebugLevels = require('../debug/DebugLevels');

const {
  parseEntity,
} = AoSParsingUtils;

const {
  writeEntity,
  writeEmptyEntity,
  writeEndOfEntityList,
} = DataUtils;

const {
  readRAM,
  writeData,
} = FileUtils;

const {
  DIR,
} = AoSConstants;

// List of boss room information to easily keep track of relevant boss flag information
const BOSS_ROOMS = [
  {
    id: 0,
    area: 0,
    address: 0x0850F58C,
    bossFlag: 0x0B,
    boss: 'Creaking Skull',
  },
  {
    id: 1,
    area: 1,
    address: 0x08511DCC,
    bossFlag: 0x0A,
    boss: 'Manticore',
  },
  {
    id: 2,
    area: 2,
    address: 0x085134AC,
    bossFlag: 0x0F,
    boss: 'Great Armor',
  },
  {
    id: 3,
    area: 3,
    address: 0x08514B48,
    bossFlag: 0x0C,
    boss: 'Big Golem',
  },
  {
    id: 4,
    area: 4,
    address: 0x08516200,
    bossFlag: 0x04,
    boss: 'Headhunter',
  },
  {
    id: 5,
    area: 5,
    address: 0x085176F8,
    bossFlag: 0x02,
    boss: 'Julius',
    skipThisBoss: true,
  },
  {
    id: 6,
    area: 6,
    address: 0x08518838,
    bossFlag: 0x01,
    boss: 'Death',
  },
  {
    id: 7,
    area: 7,
    address: 0x0851BFD4,
    bossFlag: 0x05,
    boss: 'Legion',
  },
  {
    id: 8,
    area: 8,
    address: 0x0851E528,
    bossFlag: 0x06,
    boss: 'Balore',
  },
  {
    id: 9,
    area: 9,
    address: 0x0851FD70,
    bossFlag: 0x00,
    boss: 'Graham',
    skipThisBoss: true,
  },
  {
    id: 10,
    area: 11,
    address: 0x0852253C,
    bossFlag: 0x07,
    boss: 'Chaos',
    skipThisBoss: true,
  },
];

/**
 * Helper function to get all the entities in a room
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} roomAddress - The address where the door begins
 * @return {Entity[]} A list of all entities in the room
 */
function getEntityList(data, roomAddress) {
  // Really regretting not storing more room info but there can be like
  // dozens of entities in a room that shouldn't be touched like water effects.
  const entityList = readRAM(data, roomAddress + 20, 4);
  const entities = [];

  for (let curEntity = entityList, entityId = 0; curEntity < 0x10000000; curEntity += 12) {
    const entity = parseEntity(data, curEntity);
    if (!entity) {
      break;
    }
    const entityContent = {
      _id: entityId++,
      ...entity,
    };
    entities.push(entityContent);
  }

  return entities;
}

/**
 * Helper function to generate a boss door entity to add.
 * Doesn't have an address or uniqueId tied to it so those need to be set when writing
 * @param  {uint_8} bossFlag - The id of the boss flag that determines if this door should render
 * @param  {Door} door - The door object associated with this boss door
 * @return {Entity} - Boss door entity minus address and uniqueId
 */
function generateBossDoorEntity(bossFlag, door) {
  const {
    xPos: doorX,
    yPos: doorY,
    direction,
  } = door;

  const xPos = direction === DIR.LEFT ? 0x08 : (doorX - 1) * 0x100 + 0xF8;
  const yPos = doorY * 0x100 + 0xA0;

  return {
    xPos,
    yPos,
    type: 2,
    subtype: 2,
    instaload: 0,
    varA: 0,
    varB: bossFlag
  };
}

/**
 * Removes boss doors from rooms that don't lead directly to boss rooms and
 * added new boss door entities in front of the doors that do.
 * Relocates the entity list in memory to the end of the file to ensure enough space.
 * @param  {Byte[]} data - The game data to update
 * @param  {Areas} areas - The list of Areas
 * @param  {uint_32} freeSpaceStart - The ROM address where padding free space starts
 * @return {uint_32} - The updated location of where the free space starts
 */
function relocateBossDoors(data, areas, freeSpaceStart) {
  const allRoomsByAddress = {};
  let freeSpace = freeSpaceStart + 0x08000000;

  // We pretty much have to do 2 passes no matter what.
  // One to get all the boss rooms and one to address entities.
  // We keep track of all rooms because it's easier to go from
  areas.forEach(({ rooms }) => {
    rooms.forEach(room => allRoomsByAddress[room.address] = room);
  });

  Logger.log('Beginning relocation of boss doors', DebugLevels.MARKER);
  areas.forEach(({ rooms }) => {
    rooms.forEach((room) => {
      room.doors.forEach((door) => {
        if (door.isBossDoor && !BOSS_ROOMS.find(({ address }) => address === door.destination)) {
          // Delete boss doors that don't lead to boss rooms
          const roomEntities = getEntityList(data, room.address);
          roomEntities.forEach((entity) => {
            // Thankfully max one boss per area
            if (entity.type === 2 && entity.subtype === 2) {
              Logger.log(`Removing excessive boss door from room ${room.address.toString(16)}`, DebugLevels.MARKER);
              writeEmptyEntity(data, entity.address);
            }
          });
        }
      });

      const bossRoomInfo = BOSS_ROOMS
        .filter(({ skipThisBoss }) => !skipThisBoss)
        .find(({ address }) => address === room.address);
      if (bossRoomInfo) {
        Logger.log(`Adding boss doors for boss ${bossRoomInfo.boss}`, DebugLevels.MARKER);
        // If this is a boss room
        //
        // AAA THREE CASES TO CONSIDER:
        //   NEWLY DISCONNECTED BOSS DOORS (SEE BELOW)
        //   ADD BOSS DOORS TO ADJACENT ROOMS (THIS)
        //   IF THE BOSS ROOM IS ADJACENT TO A ROOM THAT WAS PREVIOUSLY ADJACENT BUT THROUGH A DIFFERENT EXIT
        //   ALSO: WORKS WEIRD WITH WOODEN DOORS, BUT I THINK IT'S ACCEPTABLE/UNDERSTANDABLE AT LEAST
        const neighboringRooms = room.doors.map(door => ({ room: allRoomsByAddress[door.destination], door: door.complement }));
        neighboringRooms.forEach((neighboringRoom) => {
          const {
            room: curRoom,
            door: curDoor,
          } = neighboringRoom;
          let relevantDoor = curRoom.doors.find(door => door.address === curDoor);
          if (!relevantDoor) {
            Logger.log(`Door complements don't seem to have been set properly`, DebugLevels.WARN);
            relevantDoor = curRoom.doors.find(door => door.destination === room.address);
            if (!relevantDoor) {
              Logger.log(`Couldn't find a complement boss door for boss ${bossRoomInfo.boss} in neighboring room ${curRoom.address.toString(16)}`, DebugLevels.ERROR);
              return;
            }
          }

          Logger.log(`Adding new boss door to room ${curRoom.address.toString(16)} for door ${JSON.stringify(relevantDoor)}`, DebugLevels.MARKER);
          const newBossDoorEntity = generateBossDoorEntity(bossRoomInfo.bossFlag, relevantDoor);

          // Relocate all entities to free space to ensure we can fit the new door in
          // Note that this isn't strictly necessary if we're also removing a boss door from
          // the room (if the room is still a boss door neighbor but via a different door)
          // but this simplifies the logic a bit.
          const allRoomEntities = getEntityList(data, curRoom.address);
          allRoomEntities.push({ ...newBossDoorEntity, uniqueId: allRoomEntities.length });

          writeData(data, curRoom.address + 20 - 0x08000000, 4, freeSpace);

          allRoomEntities.forEach((entity) => {
            const addressCorrectedEntity = {
              ...entity,
              address: freeSpace,
            };
            writeEntity(data, addressCorrectedEntity);
            freeSpace += 12;
          });
          writeEndOfEntityList(data, freeSpace);
          freeSpace += 12;
        });
      }
    });
  });

  return freeSpace;
}

module.exports = relocateBossDoors;
