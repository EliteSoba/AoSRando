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
  writeData(data, correctedAddress, 2, 0x7FFF);
  writeData(data, correctedAddress + 2, 2, 0x7FFF);
  writeData(data, correctedAddress + 4, 4, 0);
  writeData(data, correctedAddress + 8, 4, 0);
}

/**
 * Helper function to write an entity into data at the correct address.
 * Primarily used for updating items
 * @param  {Byte[]} data - The game data to modify
 * @param  {Entity} entity - The item data to write/update
 */
function writeEntity(data, entity) {
  const correctedAddress = entity.address - 0x08000000;

  writeData(data, correctedAddress, 2, entity.xPos);
  writeData(data, correctedAddress + 2, 2, entity.yPos);
  if (entity.uniqueId) {
    writeData(data, correctedAddress + 4, 1, entity.uniqueId);
  }
  writeData(data, correctedAddress + 5, 1, entity.type);
  writeData(data, correctedAddress + 6, 1, entity.subtype);
  if (entity.instaload) {
    writeData(data, correctedAddress + 7, 1, entity.instaload);
  }
  writeData(data, correctedAddress + 8, 2, entity.varA);
  writeData(data, correctedAddress + 10, 2, entity.varB);
}

/**
 * Helper function to write a door into data at the correct address.
 * @param  {Byte[]} data - The game data to modify
 * @param  {Door} door - The door data to write/update
 */
function writeDoor(data, door) {
  const correctedAddress = door.address - 0x08000000;

  writeData(data, correctedAddress, 4, door.destination);
  writeData(data, correctedAddress + 4, 1, door.xPos);
  writeData(data, correctedAddress + 5, 1, door.yPos);
  writeData(data, correctedAddress + 6, 2, door.destXOffset);
  writeData(data, correctedAddress + 8, 2, door.destYOffset);
  writeData(data, correctedAddress + 10, 2, door.destXPos);
  writeData(data, correctedAddress + 12, 2, door.destYPos);
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
  writeDoor,
  updateDataWithAreaInfo,
};

module.exports = DataUtils;
