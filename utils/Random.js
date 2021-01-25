const MersenneTwister = require('../external/mersenne-twister/mersenne-twister');

/** Simple wrapper class for MersenneTwister that adds a pickFromArray function */
class Random {
  constructor(seed) {
    this._random = new MersenneTwister(seed);
  }

  init_seed(seed) {
    this._random.init_seed(seed);
  }

  random_int31() {
    return this._random.random_int31();
  }

  random() {
    return this._random.random();
  }

  /**
   * Util function to return either positive or negative one
   * @return {Number} Either -1 or 1
   */
  randomSign() {
    return this._random.random() < 0.5 ? -1 : 1;
  }

  /**
   * Util function to pick a random number between 0 and the max value (exclusive)
   * @param  {Number} max - The excluded max value
   * @return {Number} A random integer from [0, max)
   */
  random_int(max) {
    return Math.floor(this._random.random() * max);
  }

  /**
   * Util function to randomly pick an item from an array
   * @param  {Array} array - The array to draw an item from
   * @return {Object} - An object containing the index chosen and the item at that index.
   */
  pickFromArray(array) {
    const index = this.random_int(array.length);

    return {
      index,
      value: array[index],
    };
  }

  /**
   * Returns a shuffled version of the passed array
   * Shamelessly stolen from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * @param  {Array} array - The array to shuffle
   * @return {Array} A copy of the array with all the elements in a random order
   */
  shuffle(array) {
    const shuffledArray = [...array];

    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = this.random_int(currentIndex);
      --currentIndex;

      // And swap it with the current element.
      temporaryValue = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temporaryValue;
    }

    return shuffledArray;
  }
}

module.exports = Random;
