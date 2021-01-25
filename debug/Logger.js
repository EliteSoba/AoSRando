const DebugLevels = require('./DebugLevels');

// Mapping from level value to level name
// Some ugliness would have to occur somewhere with looking things up
// no matter the approach, as far as I can tell.
const INVERSE_LEVELS = {};
Object.keys(DebugLevels).forEach(level => INVERSE_LEVELS[DebugLevels[level]] = level);

const CURRENT_DEBUG_LEVEL = DebugLevels.ERROR;

/**
 * Helper class to just optionally print debug statements based on various levels of severity
 */
class Logger {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
    this._level = CURRENT_DEBUG_LEVEL;
  }

  /** Logs a message if the message's level is at least the current debug level. */
  log(message, level) {
    if (level >= this._level) {
      console.log(`${INVERSE_LEVELS[level]}:\t${JSON.stringify(message)}`);
    }
  }
}

module.exports = new Logger();
