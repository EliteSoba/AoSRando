const FileUtils = require('../utils/FileUtils');

const writeData = FileUtils.writeData;

/**
 * From abyssonym's AoS randomizer:
 *
 *   0x1AF8 is the byte in SRAM that saves whether the game has been beaten
 *   (#03 if so) and therefore cutscenes can be skipped.
 *   This byte is copied to 02000060 when the game is turned on.
 *   When Start is pressed during a cutscene, the byte is loaded from
 *   memory at 0x5B56C.
 *   This patch changes it to a simple MOV r0, #03 instruction.
 *
 * @param  {Byte[]} data - The game data to modify
 */
function writeCutsceneSkip(data) {
  writeData(data, 0x05B56C, 2, 0x2003);
}

module.exports = writeCutsceneSkip;
