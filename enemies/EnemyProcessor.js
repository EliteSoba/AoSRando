const getFreshEnemies = require('./Enemies');
const randomizeEnemySouls = require('./randomizeEnemySouls');
const DataUtils = require('../utils/DataUtils');
const {
  writeEnemy,
} = DataUtils;

/**
 * Helper class to handle the randomization of enemy data, so the same enemy data
 * object can be shared across multiple processes easily.
 */
class EnemyProcessor {
  constructor(data, random) {
    this._data = data;
    this._random = random;
    this._enemies = getFreshEnemies();

    this._randomizeDrops = false;
    this._randomizeSouls = false;
  }

  /**
   * If enemy item drops should be randomized. Does not affect drop rates (for now?)
   */
  randomizeDrops() {
    this._randomizeDrops = true;
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
    if (this._randomizeDrops) {
      // noop
    }
    if (this._randomizeSouls) {
      randomizeEnemySouls(this._enemies, this._random);
    }

    this._enemies.forEach(enemy => writeEnemy(this._data, enemy));
  }
}

module.exports = EnemyProcessor;
