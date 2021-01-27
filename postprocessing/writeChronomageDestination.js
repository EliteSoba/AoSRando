const FileUtils = require('../utils/FileUtils');

const {
  writeData,
} = FileUtils;

/** This is the area in memory where the Chronomage send destination is stored */
const CHRONOMAGE_DESTINATION_ADDRESS = 0xB6F30;

/**
 * Changes the room that Chronomage sends you to. Very optimistic solution
 * @param  {Byte[]} data - The game data to update
 * @param  {uint_32} destination - The destination address
 */
function writeChronomageDestination(data, destination) {
  // Write the destination and hope for the best. No idea how the room destination works.
  // I think it always sends to X macroindex 0 and Y macroindex 1 (or 0 if it's a 1 tile tall)
  // Not a super problem, but can get confusing.
  writeData(data, CHRONOMAGE_DESTINATION_ADDRESS, 4, destination);
}

module.exports = writeChronomageDestination;
