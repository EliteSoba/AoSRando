const FileUtils = require('../utils/FileUtils');

const {
  writeString,
} = FileUtils;

const BOOK_DATA = {
  RED: {
    address: 0xF3F32,
    length: 46 // There are 5 extra padding bits and idk what they do, but I'll avoid them for now
  },
  BLUE: {
    address: 0xF3F66,
    length: 42
  },
  YELLOW: {
    address: 0xF3F96,
    length: 46
  }
}

/**
 * Helper function to update the hardcoded Ancient Book descriptions
 * @param  {Byte[]} data - The game data to update
 * @param  {Soul} red - The required bullet soul
 * @param  {Soul} blue - The required guardian soul
 * @param  {Soul} yellow - The required enchanted soul
 */
function updateAncientBooks(data, red, blue, yellow) {
  const updateBook = (soul, bookData) => {
    let desc = soul.name; //soul.description;
    if (desc.length > bookData.length - 3) {
      desc = desc.substring(0, bookData.length - 3) + '...';
    }

    // I think this is to indcate the end of the string
    desc += String.fromCharCode(0x0A);

    writeString(data, bookData.address, desc);
  }
  updateBook(red, BOOK_DATA.RED);
  updateBook(blue, BOOK_DATA.BLUE);
  updateBook(yellow, BOOK_DATA.YELLOW);
}

module.exports = updateAncientBooks;
