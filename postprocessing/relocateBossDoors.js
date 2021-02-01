const AoSParsingUtils = require('../processing/AoSParsingUtils');
const DataUtils = require('../utils/DataUtils');
const FileUtils = require('../utils/FileUtils');
const AoSConstants = require('../utils/AoSConstants')

const Logger = require('../debug/Logger');
const DebugLevels = require('../debug/DebugLevels');

const {
  getEntityListAddress,
  getEntityList,
  parseEntity,
} = AoSParsingUtils;

const {
  sortEntityList,
  writeEntityList,
  deleteEntity,
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

  const xPos = direction === DIR.LEFT ? 0x08 : (doorX - 1) * 0x100 + 0xE8;
  const yPos = doorY * 0x100 + 0xA0;

  return {
    xPos,
    yPos,
    type: 2,
    subtype: 2,
    instaload: 1,
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

  Logger.log('Adding new boss doors', DebugLevels.MARKER);

  // For all relevant boss rooms, find the neighboring rooms,
  // and add boss doors to them, moving the entity lists farther down in memory
  BOSS_ROOMS.filter(({ skipThisBoss }) => !skipThisBoss)
    .map(bossRoom => ({ bossRoomInfo: bossRoom, room: allRoomsByAddress[bossRoom.address] }))
    .forEach(({ bossRoomInfo, room }) => {
      Logger.log(`Adding boss doors for boss ${bossRoomInfo.boss}`, DebugLevels.LOG);

      // Find the rooms that lead into this boss room
      const neighboringRooms = room.doors.map(door => ({
        room: allRoomsByAddress[door.destination], door: door.complement
      }));
      neighboringRooms.forEach((neighboringRoom) => {
        const {
          room: curRoom,
          door: curDoor,
        } = neighboringRoom;

        // For each neighboring room, find which door should be the one to have a boss door added
        let relevantDoor = curRoom.doors.find(door => door.address === curDoor);
        if (!relevantDoor) {
          Logger.log(`Door complements don't seem to have been set properly`, DebugLevels.WARN);
          relevantDoor = curRoom.doors.find(door => door.destination === room.address);
          if (!relevantDoor) {
            Logger.log(`Couldn't find a complement boss door for boss ${bossRoomInfo.boss} in neighboring room ${curRoom.address.toString(16)}`, DebugLevels.ERROR);
            return;
          }
        }

        if (relevantDoor.isBossDoor) {
          // Because there's only one boss per area, we don't need to worry about
          // if it's the boss door for the right boss for now
          Logger.log(`Room ${curRoom.address.toString(16)} already has a boss door in the correct location`, DebugLevels.LOG);
          return;
        }

        Logger.log(`Adding new boss door to room ${curRoom.address.toString(16)} for door ${relevantDoor.address.toString(16)}`, DebugLevels.LOG);
        const newBossDoorEntity = generateBossDoorEntity(bossRoomInfo.bossFlag, relevantDoor);

        // Relocate all entities to free space to ensure we can fit the new door in
        // Note that this isn't strictly necessary if we're also removing a boss door from
        // the room (if the room is still a boss door neighbor but via a different door)
        // but this simplifies the logic a bit.
        const allRoomEntities = getEntityList(data, getEntityListAddress(data, curRoom.address));
        let freeId;
        for (freeId = 0; freeId < allRoomEntities.length; freeId++) {
          if (!allRoomEntities.some(({ uniqueId }) => uniqueId === freeId)) {
            break;
          }
        }
        allRoomEntities.push({ ...newBossDoorEntity, uniqueId: freeId });

        // The entity list has to be sorted for the game to properly load entities
        const sortedEntities = sortEntityList(allRoomEntities, curRoom);

        writeData(data, curRoom.address + 20 - 0x08000000, 4, freeSpace);

        freeSpace += writeEntityList(data, freeSpace, sortedEntities);
      });
    });

  Logger.log('Removing unused boss doors', DebugLevels.MARKER);

  // Find every boss door that doesn't lead to a boss room, and delete it
  // Note that this involves reparsing the entity list which can somewhat
  // double dip the work of the previous step, but that's okay for now.
  areas.forEach(({ rooms }) => {
    rooms.forEach((room) => {
      room.doors.forEach((door) => {
        if (door.isBossDoor && !BOSS_ROOMS.find(({ address }) => address === door.destination)) {
          // Delete boss doors that don't lead to boss rooms
          const roomEntities = getEntityList(data, getEntityListAddress(data, room.address));
          roomEntities.forEach((entity) => {
            // Thankfully max one boss per area
            if (entity.type === 2 && entity.subtype === 2) {
              Logger.log(`Removing excessive boss door from room ${room.address.toString(16)}`, DebugLevels.LOG);
              deleteEntity(data, entity);
            }
          });
        }
      });
    });
  });

  return freeSpace;
}

module.exports = relocateBossDoors;
