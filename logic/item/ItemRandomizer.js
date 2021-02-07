const VanillaItems = require('./implementations/VanillaItems');
const FullRandom = require('./implementations/FullRandom');

const Logger = require('../../debug/Logger');
const DebugLevels = require('../../debug/DebugLevels');

/**
 * Controller class for item randomization.
 * Provides a list of item rando implementations to pick from
 * and handles the reassigning of items.
 */
class ItemRandomizer {
  constructor() {
    this._implementations = [];

    this._registerImplementation(VanillaItems);
    this._registerImplementation(FullRandom);

    this.reset();
  }

  /**
   * Resets all settings for the ItemRandomizer
   */
  reset() {
    this._selection = -1;
  }

  /**
   * Helper function to register an item rando implementation as an option
   * @param  {function} impl - The implementation add as an option
   * @param  {string} impl.displayName - The name to show the user for the option
   * @param  {string} impl.desc - A brief description of the implementation
   * @private
   */
  _registerImplementation(impl) {
    this._implementations.push({
      id: this._implementations.length,
      name: impl.displayName,
      desc: impl.desc,
      func: impl,
    });
  }

  /**
   * Returns the list of implementation options
   * @return {Object[]} - The list of implementations
   */
  getImplementations() {
    return this._implementations;
  }

  /**
   * Selects one of the item rando implementations to use
   * @param  {number} id - The id number of one of the implementations in the list
   */
  selectImplementation(id) {
    this._selection = id;
  }

  /**
   * Executes item randomization using the selected implementation
   * @param  {Areas} areas - The list of Areas
   * @param  {Requirements} requirements - Object containing the list of progression mappings and the Dracula soul info
   * @param  {Random} random - Shared pseudorandom number generator
   * @param  {Room} startingRoom - Object describing the starting room
   * @param  {boolean} ensureFullyClearable - Whether or not to ensure the mapping is 100%able
   * @return {Object} - The new item mapping if it succeeded, false otherwise
   */
  execute(areas, requirements, random, startingRoom, ensureFullyClearable) {
    if (this._selection === -1) {
      Logger.log('No item randomization implementation selected. Leaving as default', DebugLevels.LOG);
    }
    else if (this._selection >= this._implementations.length || this._selection < 0) {
      Logger.log('Invalid randomization implementation was selected. Leaving as default', DebugLevels.WARN);
    }
    else {
      const chosenImpl = this._implementations[this._selection];
      Logger.log(`Using implementation ${chosenImpl.id}: ${chosenImpl.name}`, DebugLevels.LOG);
      return chosenImpl.func(areas, requirements, random, startingRoom, ensureFullyClearable);
    }
  }
}

module.exports = ItemRandomizer;
