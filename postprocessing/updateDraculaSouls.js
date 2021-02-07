const FileUtils = require('../utils/FileUtils');

const {
  writeData,
} = FileUtils;

const MEMORY_ADDRESSES = {
  RED: 0xD4CF0,
  BLUE: 0xD4CF6,
  YELLOW: 0xD4CFC,
};

/**
 * Helper function to update the hardcoded values of the Dracula souls
 * @param  {Byte[]} data - The game data to update
 * @param  {Soul} red - The required bullet soul
 * @param  {Soul} blue - The required guardian soul
 * @param  {Soul} yellow - The required enchanted soul
 */
function updateDraculaSouls(data, red, blue, yellow) {
  writeData(data, MEMORY_ADDRESSES.RED, 1, red.id);
  writeData(data, MEMORY_ADDRESSES.BLUE, 1, blue.id);
  writeData(data, MEMORY_ADDRESSES.YELLOW, 1, yellow.id);
}

module.exports = updateDraculaSouls;
