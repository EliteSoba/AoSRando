const DebugLevels = require('./DebugLevels');

/**
 * Mapping from level value to level name, to denote the severity of each logged message.
 */
const INVERSE_LEVELS = {};
Object.keys(DebugLevels).forEach(level => INVERSE_LEVELS[DebugLevels[level]] = level);

/** Current debug level. Should probably be a command line argument but for now it's just a modifiable constant. */
const CURRENT_DEBUG_LEVEL = DebugLevels.FATAL;

/**
 * Singleton helper class to just optionally print debug statements based on various levels of severity
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

  /**
   * Logs a message if the message's level is at least the current debug level
   * @param  {String} message - The message to log
   * @param  {DebugLevel} level - The level of severity for this message
   */
  log(message, level) {
    if (level >= this._level) {
      console.log(`${INVERSE_LEVELS[level]}:\t${JSON.stringify(message)}`);
    }
  }
}

module.exports = new Logger();
