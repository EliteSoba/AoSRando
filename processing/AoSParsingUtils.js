const FileUtils = require('../utils/FileUtils');
const AoSConstants = require('../utils/AoSConstants');

const {
  readData,
  readRAM,
} = FileUtils;

const {
  DIR,
  Zones,
} = AoSConstants;

/**
 * Returns an object describing an entity starting at the given position.
 * If the entity in question looks like the end-of-entity padding, returns null instead.
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address where the entity begins
 * @return {Object} - An object containing all the defining information about the entity, or null
 */
function parseEntity(data, address) {
  let curAddress = address;
  const popData = (size) => {
    const content = readRAM(data, curAddress, size);
    curAddress += size;
    return content;
  }
  const xPos = popData(2);
  const yPos = popData(2);
  const uniqueId = popData(1);
  const type = popData(1);
  const subtype = popData(1);
  const instaload = popData(1);
  const varA = popData(2);
  const varB = popData(2);
  if (xPos === 0x7FFF && yPos === 0x7FFF) {
    // Probably end padding, but just check a bit more
    if (type === 0 && subtype === 0) {
      return null;
    }
  }
  return {
    address,
    xPos,
    yPos,
    uniqueId,
    type,
    subtype,
    instaload,
    varA,
    varB
  };
}

/**
 * Returns an object describing the drops of an enemy starting at the given position.
 *
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address where the enemy begins
 * @return {Object} - An object listing the address where the enemy info is stored, and the item/soul drops
 */
function parseEnemy(data, address) {
  let curAddress = address;
  const popData = (size) => {
    const content = readData(data, curAddress, size);
    curAddress += size;
    return content;
  }
  const createCode = popData(4);
  const updateCode = popData(4);
  const item1 = popData(2);
  const item2 = popData(2);
  const HP = popData(2);
  const MP = popData(2);
  const exp = popData(2);
  const soulRarity = popData(1);
  const attack = popData(1);
  const defense = popData(1);
  const item1Rarity = popData(1);
  const item2Rarity = popData(1);
  const soulType = popData(1);
  const soul = popData(1);
  const unknown11 = popData(1);
  const unknown12 = popData(2);
  const weaknesses = popData(2);
  const resistances = popData(2);
  const unknown13 = popData(2);
  const unknown14 = popData(2);

  return {
    address,
    item1,
    item2,
    soulType,
    soul,
    HP,
    exp,
    attack,
    defense,
    weaknesses,
    resistances
  };
}

/**
 * Returns an object describing a door starting at the given position.
 * If the door in question looks like the end-of-entity padding, returns null instead.
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address where the door begins
 * @return {Object} - An object containing all the defining information about the door, or null
 */
function parseDoor(data, address) {
  let curAddress = address;
  const popData = (size) => {
    const content = readRAM(data, curAddress, size);
    curAddress += size;
    return content;
  }
  const destination = popData(4);

  // Sometimes it's 0xFFFF1F00 and sometimes it's 0xFFFF1F01 and idk why it's different sometimes
  if (destination === 0xFFFF1F00 || destination === 0xFFFF1F01) {
    // Simple check to see if we've overstepped the door list by 1.
    return null;
  }

  const xPos = popData(1);
  const yPos = popData(1);
  const destXOffset = popData(2);
  const destYOffset = popData(2);
  const destXPos = popData(2);
  const destYPos = popData(2);

  return {
    address,
    destination,
    xPos,
    yPos,
    destXOffset,
    destYOffset,
    destXPos,
    destYPos,
  };
}

/**
 * Helper function to get the entity list address
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} roomAddress - The address where the door begins
 * @return {uint_32} The addres in RAM where the entity list is stored
 */
function getEntityListAddress(data, roomAddress) {
  return readRAM(data, roomAddress + 20, 4);
}

/**
 * Helper function to get all the entities in a room
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} entityList - The address where the entity list begins
 * @return {Entity[]} A list of all entities in the room
 */
function getEntityList(data, entityList) {
  // Really regretting not storing more room info but there can be like
  // dozens of entities in a room that shouldn't be touched like water effects.
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
 * Parses the game data for information about the room at the given address
 * and returns an object holding this information.
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address where the room begins
 * @param  {DOOR[]} allDoors - A list of all doors. If present, will populate door lists with
 *   the complementary output door. Unfortunately effectively requires a second parsing pass to populate.
 * @return {Object} - An object containing all of the defining information about a room
 */
function parseRoom(data, address, allDoors) {
  let curAddress = address;
  const popData = (size) => {
    const content = readRAM(data, curAddress, size);
    curAddress += size;
    return content;
  }
  popData(8); // Nothing we want
  const layerList = popData(4); // Layer List
  const gfxList = popData(4); // GFX Page List
  const paletteList = popData(4); // Palette Page List
  const entityList = popData(4); // Entity List
  const doorList = popData(4); // Door list
  popData(6); // IDK what the next 6 bytes are so skip to Map X/Y
  const mapX = popData(1);
  const mapY = popData(1);

  // Parse layers to try to estimate room width/height
  let mapWidth = -1;
  let mapHeight = -1;
  for (let curLayer = layerList; curLayer < gfxList; curLayer += 12) {
    mapWidth = Math.max(mapWidth, readRAM(data, curLayer + 5, 1));
    mapHeight = Math.max(mapHeight, readRAM(data, curLayer + 7, 1));
  }

  // Parse doors
  let doors = [];

  // For now, lazy door check by just checking the last 3 due to the 0xFFFF1F00/0xFFFF1F01 thing
  for (let curDoor = doorList, doorId = 0; readRAM(data, curDoor + 1, 3) !== 0xFFFF1F; curDoor += 16, doorId++) {
    const door = parseDoor(data, curDoor);
    if (!door) {
      break;
    }

    const doorContent = {
      // Add an internal ID for which door this is
      _door: doorId,
      ...door,
    };

    // Guess direction door is going. It seems to be mostly reliable, but is still just a guess.
    // Fails on special room transitions that happen partway through the room, like Graham boss door
    if (door.xPos === 0xFF) {
      doorContent['direction'] = DIR.LEFT;
    }
    else if (door.yPos === 0xFF) {
      doorContent['direction'] = DIR.UP;
    }
    else if (door.xPos >= mapWidth) {
      doorContent['direction'] = DIR.RIGHT;
    }
    else {
      doorContent['direction'] = DIR.DOWN;
    }

    doorContent['sourceRoom'] = address;

    if (allDoors) {
      // Look for doors in the destination room that also lead back into this room
      // Has issues on rooms with multiple exits leading to the same room (like in Floating Garden)
      // and also when the output door doesn't lead back to the same room (like in Floating Garden)
      const matchingComplements = allDoors.filter(d => d.sourceRoom === door.destination && d.destination === address);
      if (matchingComplements.length === 1) {
        // If there's only one matching door, use that as the complement
        doorContent['complement'] = matchingComplements[0].address;
      }
      else {
        // If there are multiple doors, leave it as a list to be manually corrected later
        doorContent['complement'] = matchingComplements.map(d => d.address);
      }
    }

    doors = doors.concat(doorContent);
  }

  // Parse items
  const items = getEntityList(data, entityList)
    .filter (entity => entity.type === 4 || entity.type === 5)
    .map((entity, i) => {
      if (entity.type === 4) {
        return {
          _item: i,
          ...entity,
        };
      }
      else {
        // entity.type === 5. Hard mode item
        return {
          _item: i,
          ...entity,
          isHardMode: true,
        };
      }
    });

  return {
    address,
    mapX,
    mapY,
    mapWidth,
    mapHeight,
    doorList,
    doors,
    items
  };
}

/**
 * Given some Zone information, extracts a list of room addresses associated with that Zone.
 * @param  {byte[]} data - The AoS game file
 * @param  {Zone} zone - The Zone to query
 * @return {Object} - An object chiefly containing the addresses of every room in the Zone
 */
function parseZone(data, zone) {
  let rooms = [];

  for (let curAddress = zone.first, roomId = 0; curAddress <= zone.last; curAddress += 4, roomId++) {
    const room = readData(data, curAddress, 4);
    rooms = rooms.concat(room);
  }

  return {
    _name: zone._name,
    _area: zone._area,
    rooms: rooms,
  };
}

const AoSParsingUtils = {
  parseEntity,
  parseEnemy,
  parseDoor,
  getEntityListAddress,
  getEntityList,
  parseRoom,
  parseZone,
};

module.exports = AoSParsingUtils;
