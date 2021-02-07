/**
 * Helper function to generate a filename based on the original filename, seed, and randomization config
 * @param  {String} originalFilename - The original name of the game file
 * @param  {number} seed - The seed used for randomization
 * @param  {Object} config - The randomization configuration
 * @return {String} - The original filename with some additional uniquely identifying info appended
 */
function generateFilename(originalFilename, seed, config) {
  const splitFilename = originalFilename.split('.');
  let filename = originalFilename;
  let extension = '';
  if (splitFilename.length > 1) {
    extension = `.${splitFilename.pop()}`;
    filename = splitFilename.join('.');
  }

  return `${filename}-${seed}${extension}`;
}

module.exports = generateFilename;
