const FileUtils = require('./FileUtils');
const AoSParsingUtils = require('../processing/AoSParsingUtils');

const {
  writeData,
} = FileUtils;
const {
  getEntityList,
} = AoSParsingUtils;

/**
 * Helper function to write an entity into data at the correct address.
 * Primarily used for updating items
 * @param  {Byte[]} data - The game data to modify
 * @param  {Entity} entity - The entity data to write/update
 */
function writeEntity(data, entity) {
  const correctedAddress = entity.address - 0x08000000;

  let curAddress = correctedAddress;
  const pushData = (size, content) => {
    writeData(data, curAddress, size, content);
    curAddress += size;
  }
  pushData(2, entity.xPos);
  pushData(2, entity.yPos);
  if (entity.uniqueId) {
    pushData(1, entity.uniqueId);
  }
  else {
    curAddress += 1;
  }
  pushData(1, entity.type);
  pushData(1, entity.subtype);
  if (entity.instaload) {
    pushData(1, entity.instaload);
  }
  else {
    curAddress += 1;
  }
  pushData(2, entity.varA);
  pushData(2, entity.varB);
}

/**
 * Special util function to write item data, because items also set a permanent
 * flag so they can't be regotten
 * @param  {Byte[]} data - The game data to modify
 * @param  {Item} item - The item data to write/update
 */
function writeItem(data, item) {
  writeEntity(data, item);
  if (item.flag) {
    let curAddress = item.flag;
    const pushData = (size, content) => {
      writeData(data, curAddress, size, content);
      curAddress += size;
    }

    pushData(1, item.type);
    pushData(1, item.subtype);
    curAddress += 1; // Padding?
    pushData(2, item.varA);
    pushData(2, item.varB);
  }
}

/**
 * Helper function that writes the 0xFF7FFF7F0000000000000000 entity list indicator
 * to the given address
 * @param  {Byte[]} data - The game data to modify
 * @param  {uint_32} address - The address to start writing at
 */
function writeEndOfEntityList(data, address) {
  const correctedAddress = address - 0x08000000;

  let curAddress = correctedAddress;
  const pushData = (size, content) => {
    writeData(data, curAddress, size, content);
    curAddress += size;
  }
  pushData(2, 0x7FFF);
  pushData(2, 0x7FFF);
  pushData(4, 0);
  pushData(4, 0);
}

/**
 * Helper function to write a full entity list.
 * Note that this can also be used to write any contiguous block of an entity list
 * spanning from an arbitrary index in the entity list to the end.
 * Returns the total length of content written
 * @param  {Byte[]} data - The game data to modify
 * @param  {uint_32} address - The address to start writing at
 * @param  {Entity[]} entities - All the entities to write
 * @return {uint_32} - The total length of content added (address + this value points to the spot right after this list)
 */
function writeEntityList(data, address, entities) {
  let curOffset = 0;
  entities.forEach((entity) => {
    const addressCorrectedEntity = {
      ...entity,
      address: address + curOffset,
    };

    writeEntity(data, addressCorrectedEntity);
    curOffset += 12;
  });
  writeEndOfEntityList(data, address + curOffset);
  return curOffset + 12;
}

/**
 * Helper function to delete an entity by shifting all the entries in the entity list
 * up by one index and writing the end of list marker one space earlier.
 * @param  {Byte[]} data - The game data to modify
 * @param  {Entity} entity - The entity to delete
 */
function deleteEntity(data, entity) {
  // Get all the entities in the list after this one
  const entities = getEntityList(data, entity.address).slice(1);

  // Write all these entities one space earlier in the ist
  writeEntityList(data, entity.address, entities);
}

/**
 * Helper function to update enemy DNA with new drops
 * @param  {Byte[]} data - The game data to modify
 * @param  {Enemy} enemy - The enemy (drop) data to write/update
 */
function writeEnemy(data, enemy) {
  let curAddress = enemy.address;
  const pushData = (size, content) => {
    writeData(data, curAddress, size, content);
    curAddress += size;
  }

  curAddress += 8; // Create/Update codes
  pushData(2, enemy.item1);
  pushData(2, enemy.item2);
  curAddress += 11; // HP/MP/EXP/Soul Rarity/ATK/DEF/Item Rarity
  pushData(1, enemy.soulType);
  pushData(1, enemy.soul);
}

/**
 * Helper function to write a door into data at the correct address.
 * @param  {Byte[]} data - The game data to modify
 * @param  {Door} door - The door data to write/update
 */
function writeDoor(data, door) {
  const correctedAddress = door.address - 0x08000000;

  let curAddress = correctedAddress;
  const pushData = (size, content) => {
    writeData(data, curAddress, size, content);
    curAddress += size;
  }
  pushData(4, door.destination);
  pushData(1, door.xPos);
  pushData(1, door.yPos);
  pushData(2, door.destXOffset);
  pushData(2, door.destYOffset);
  pushData(2, door.destXPos);
  pushData(2, door.destYPos);
}

function updateDataWithAreaInfo(data, areas) {
  areas.forEach((area) => {
    area.rooms.forEach((room) => {
      // For now just update items/doors.
      // Expand to update doorlist/entitylist locations?
      room.items.forEach(item => writeItem(data, item));
      room.doors.forEach(door => writeDoor(data, door));
    });
  });
}

const DataUtils = {
  writeEntity,
  writeItem,
  writeEndOfEntityList,
  writeEntityList,
  deleteEntity,
  writeEnemy,
  writeDoor,
  updateDataWithAreaInfo,
};

module.exports = DataUtils;
