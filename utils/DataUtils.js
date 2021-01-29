const FileUtils = require('../utils/FileUtils');
const {
  writeData,
} = FileUtils;

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
 * Helper function to write an entity into data at the correct address.
 * Primarily used for updating items
 * @param  {Byte[]} data - The game data to modify
 * @param  {Entity} entity - The item data to write/update
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
      room.items.forEach(item => writeEntity(data, item));
      room.doors.forEach(door => writeDoor(data, door));
    });
  });
}

const DataUtils = {
  writeEndOfEntityList,
  writeEntity,
  writeEnemy,
  writeDoor,
  updateDataWithAreaInfo,
};

module.exports = DataUtils;
