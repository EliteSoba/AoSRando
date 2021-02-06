const getFreshEnemies = require('./Enemies');

const randomizeEnemySouls = require('./randomizeEnemySouls');
const shuffleEnemyDrops = require('./shuffleEnemyDrops');

const DataUtils = require('../utils/DataUtils');

const DebugLevels = require('../debug/DebugLevels');
const Logger = require('../debug/Logger');

const {
  writeEnemy,
} = DataUtils;

/**
 * Helper class to handle the randomization of enemy data, so the same enemy data
 * object can be shared across multiple processes easily.
 */
class EnemyProcessor {
  /**
   * Constructor. Generates a new EnemyProcessor for the given data/pseudorandom number generator
   * @param {Byte[]} data - The game data to modify
   * @param {Random} random - The shared pseudorandom number generator
   */
  constructor(data, random) {
    this._data = data;
    this._random = random;
    this._enemies = getFreshEnemies();

    this._randomizeDrops = false;
    this._shuffleDrops = false;
    this._randomizeSouls = false;
  }

  /**
   * If enemy item drops should be randomized. Does not affect drop rates (for now?).
   * Key distinction between this and shuffleDrops is the opportunity to drop items
   * that normally aren't dropped by enemies.
   * Should not be true at the same time as shuffleDrops
   */
  randomizeDrops() {
    this._randomizeDrops = true;
    return this;
  }

  /**
   * If enemy item drops should be shuffled amongst themselves.
   * Should not be true at the same time as randomizeDrops
   */
  shuffleDrops() {
    this._shuffleDrops = true;
    return this;
  }

  /**
   * If enemy souls should be randomized. Will not drop progression (except Chronomage as pseudoprogression)
   */
  randomizeSouls() {
    this._randomizeSouls = true;
    return this;
  }

  execute() {
    if (this._randomizeDrops && this._shuffleDrops) {
      Logger.log('Only one of randomizeDrops and shuffleDrops should be set. Prioritizing shuffle', DebugLevels.WARN);
    }

    if (this._shuffleDrops) {
      shuffleEnemyDrops(this._enemies, this._random);
    }
    else if (this._randomizeDrops) {
      // noop
      // TODO: implement this
    }

    if (this._randomizeSouls) {
      randomizeEnemySouls(this._enemies, this._random);
    }

    this._enemies.forEach(enemy => writeEnemy(this._data, enemy));
  }
}

module.exports = EnemyProcessor;
