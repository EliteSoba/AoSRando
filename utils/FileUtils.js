/**
 * Reads some array of bytes from the file at the given location.
 * The data read is little-endian, so this function takes that into account and reads "backwards"
 * in order to get a more reasonable human-interactable number
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address to start reading from
 * @param  {number} length - The number of bytes to read
 * @return {number} - The value stored at the given address
 */
function readData(data, address, length) {
  let out = 0;
  for (let i = length - 1; i >= 0; i--) {
    // Left-shifting, while more intuitive, limits the output to a signed 32 bit integer
    // which results in a lot of negative numbers, which cause headaches in equality checks
    out *= 0x100;
    out += data[address + i];
  }
  return out;
}

/**
 * Reads some array of bytes from "RAM." The game copies the file contents to 0x08000000
 * so we account for that offset and read the corresponding location on the ROM.
 * Simplifies a lot of interactions with door/entity lists.
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address to start reading from
 * @param  {number} length - The number of bytes to read
 * @return {number} - The value stored at the given address
 */
function readRAM(data, address, length) {
  return readData(data, address - 0x08000000, length);
}

/**
 * Modifies data by writing the given content to the given address, overwriting the existing data.
 * Note that this modifies the passed data argument, which felt a bit better than deep copying,
 * given the frequency that this function can be called.
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address to start writing to
 * @param  {number} length - The number of bytes to write
 * @param {number} content - The content to write to the given address
 */
function writeData(data, address, length, content) {
  let c = content;
  for (let i = 0; i < length; i++) {
    // Remember that data is little-endian
    data[address + i] = c % 0x100;

    // Just gonna hope this works all the time.
    c = c >> 8;
  }
}

/**
 * Unlike most data, raw strings are stored in big-endian format,
 * so writing data is significantly more straightforward
 * @param  {byte[]} data - The AoS game file
 * @param  {uint_32} address - The address to start writing to
 * @param  {String} content - The string to write to the given address
 */
function writeString(data, address, content) {
  for (let i = 0; i < content.length; i++) {
    data[address + i] = content.charCodeAt(i);
  }
}

const FileUtils = {
  readData,
  readRAM,
  writeData,
  writeString,
}

module.exports = FileUtils;
