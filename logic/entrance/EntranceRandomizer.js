const updateAreasWithNewConnections = require('./updateAreasWithNewConnections');

const VanillaEntrances = require('./implementations/VanillaEntrances');
const FirstDraftEntranceShuffle = require('./implementations/FirstDraftEntranceShuffle');

const Logger = require('../../debug/Logger');
const DebugLevels = require('../../debug/DebugLevels');

/** The max number of entrance randomization attempts to try before giving up. */
const MAX_ATTEMPTS = 1000;

/**
 * Controller class for entrance randomization.
 * Provides a list of entrance rando implementations to pick from
 * and handles the reassigining of doors.
 */
class EntranceRandomizer {
  constructor() {
    this._implementations = [];

    this._registerImplementation(VanillaEntrances);
    this._registerImplementation(FirstDraftEntranceShuffle);

    this._selection = -1;
  }

  /**
   * Helper function to register an entrance rando implementation as an option
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
   * Selects one of the entrance rando implementations to use
   * @param  {number} id - The id number of one of the implementations in the list
   */
  selectImplementation(id) {
    this._selection = id;
  }

  /**
   * Executes entrance randomization using the selected implementation
   * @param  {Areas} areas - The list of Areas
   * @param  {Random} random - Shared pseudorandom number generator
   * @param  {Room} startingRoom - Object describing the starting room
   * @return {boolean} - true if the randomization succeeded, false otherwise
   */
  execute(areas, random, startingRoom) {
    if (this._selection === -1) {
      Logger.log('No entrance randomization implementation selected. Leaving as default', DebugLevels.LOG);
    }
    else if (this._selection >= this._implementations.length || this._selection < 0) {
      Logger.log('Invalid randomization implementation was selected. Leaving as default', DebugLevels.WARN);
    }
    else {
      const chosenImpl = this._implementations[this._selection];
      Logger.log(`Using implementation ${chosenImpl.id}: ${chosenImpl.name}`, DebugLevels.LOG);
      const newConnections = chosenImpl.func(areas, random, startingRoom);
      if (!newConnections) {
        return false;
      }

      updateAreasWithNewConnections(areas, newConnections);
      return true;
    }
  }

  /**
   * Executes entrance randomization using the selected implementation,
   * but keeps trying until it succeeds or hits ${MAX_ATTEMPTS} tries.
   * @param  {function} getFreshAreas - Getter for a fresh list of areas, so multiple attempts can be tried
   * @param  {Random} random - Shared pseudorandom number generator
   * @param  {Room} startingRoom - Object describing the starting room
   * @param  {function} solvabilityTest - Function that tests if the configuration is valid or not
   * @return {Areas} - The new list of randomized areas, or null if randomization failed
   */
  executeUntilSuccessful(getFreshAreas, random, startingRoom, solvabilityTest) {
    for (let attempts = 1; attempts <= MAX_ATTEMPTS; attempts++) {
      const areas = getFreshAreas();
      const succeeded = this.execute(areas, random, startingRoom);
      if (succeeded) {
        Logger.log(`Generated a successful map on attempt ${attempts}`, DebugLevels.DEBUG);
        if (solvabilityTest(areas)) {
          Logger.log('This map passed the solvability test.', DebugLevels.DEBUG);
          return areas;
        }
        else {
          Logger.log('This map did not pass the solvability test. Rerandomizing...', DebugLevels.DEBUG);
        }
      }
    }
    Logger.log(`Couldn't generate a proper map in ${MAX_ATTEMPTS} tries.`, DebugLevels.FATAL);
    return null;
  }
}

module.exports = EntranceRandomizer;
