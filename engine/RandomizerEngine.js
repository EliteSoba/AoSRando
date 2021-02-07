const determineAccess = require('../progression/determineAccess');
const getFreshAreas = require('../progression/Areas');
const Keys = require('../progression/Keys');

const AoSUtils = require('../utils/AosUtils');
const DataUtils = require('../utils/DataUtils');
const SolvabilityUtils = require('../utils/SolvabilityUtils');

const determineRequirements = require('../logic/determineRequirements');
const pickStartingRoom = require('../logic/pickStartingRoom');
const EntranceRandomizer = require('../logic/entrance/EntranceRandomizer');
const ItemRandomizer = require('../logic/item/ItemRandomizer');

const EnemyProcessor = require('../enemies/EnemyProcessor');
const PostProcessor = require('../postprocessing/PostProcessor');
const randomizeShop = require('../shop/randomizeShop');

const generateFilename = require('./generateFilename');

const Logger = require('../debug/Logger');
const DebugLevels = require('../debug/DebugLevels');

const Random = require('../utils/Random');

const {
  getOppositeDirection,
} = AoSUtils;
const {
  updateDataWithAreaInfo
} = DataUtils;
const {
  isSolvable,
} = SolvabilityUtils;

/** Simple default randomization configuration that only randomizes items and not doors */
const DEFAULT_CONFIG = {
  randomizeDoors: false,
  randomizeItems: true,
  ensureFullyClearable: true,
  itemRandomizerChoice: 1,
  originalFilename: 'aos.gba',
};

/**
 * Engine that handles the randomization process.
 * Done as a class instead of just a function to more easily allow interfacing
 * with the different implementation choices for the entrance/item randomizers.
 */
class RandomizerEngine {
  constructor() {
    this._entranceRandomizer = new EntranceRandomizer();
    this._itemRandomizer = new ItemRandomizer();
    this._enemyProcessor = new EnemyProcessor();
    this._postProcessor = new PostProcessor();
    this._random = new Random();
  }

  /**
   * Returns a list containing information about the entrance randomization choices
   * @return {Object[]} - A list containing a name/description of each implementation choice, as well as the backend id
   */
  getEntranceRandomizerImplementationChoices() {
    return this._entranceRandomizer.getImplementations;
  }

  /**
   * Returns a list containing information about the item randomization choices
   * @return {Object[]} - A list containing a name/description of each implementation choice, as well as the backend id
   */
  getItemRandomizerImplementationChoices() {
    return this._itemRandomizer.getImplementations;
  }

  /**
   * Actually performs the randomization. Takes in the byte array of game data and a configuration object
   * and returns the randomized game data, or null if something failed.
   * @param {Byte[]} data - The game data to modify
   * @param  {Object} config - A object containing configuration data for this randomzation run
   * @param  {number} config.seed - The seed to use for randomization. If not provided, will randomly generate a seed instead
   * @param  {boolean} config.randomizeDoors - If room entrances should be randomized. Defaults to false
   * @param  {boolean} config.randomizeItems - If items should be randomized. Defaults to true
   * @param  {boolean} config.ensureFullyClearable - If the resulting map should be 100% clearable. Defaults to true
   * @param  {number} config.entranceRandomizerChoice - The chosen entrance randomizer implementation. If not set, no room randomization will occur
   * @param  {number} config.itemRandomizerChoice - The chosen item randomization implementation. Defaults to 1
   * @param  {String} config.originalFilename - The original game's file name, off which the resulting output filename is based
   * @return {Object} - The updated game data and new filename to use, or null if something failed
   */
  execute(data, config = {}) {
    const resolvedConfig = {
      ...DEFAULT_CONFIG,
      ...config,
    }
    // Set up the seed on the randomization for consistency
    // TODO: I also want to add the option to seed the item and entrance randos independently,
    // in case someone finds a good random map and wants to try different item placements on that.
    const seed = 'seed' in resolvedConfig ? resolvedConfig.seed : this._random.random_int31();
    this._random.init_seed(seed);

    let areas = getFreshAreas();
    this._entranceRandomizer.reset();
    this._itemRandomizer.reset();
    this._enemyProcessor.reset();
    this._postProcessor.reset();

    if ('entranceRandomizerChoice' in resolvedConfig) {
      this._entranceRandomizer.selectImplementation(resolvedConfig.entranceRandomizerChoice);
    }
    if ('itemRandomizerChoice' in resolvedConfig) {
      this._itemRandomizer.selectImplementation(resolvedConfig.itemRandomizerChoice);
    }

    const requirements = determineRequirements(this._random);

    // Determine the starting room. With entrance randomizer, this should be a save room
    // to allow for immediate suspends, but save points don't interact well with the
    // vanilla starting room, I suspect due to it being larger than 1x1.
    let startingRoom = areas[0].rooms[0];
    if (resolvedConfig.randomizeDoors) {
      startingRoom = pickStartingRoom(areas, this._random);
    }

    Logger.log(`Starting at ${startingRoom.address.toString(16)}`, DebugLevels.LOG);

    /*** Randomize map and item placements ***/
    // First attempt to generate a reasonable map, then try to make sure that items
    // can be placed on that map in a solvable manner.
    let solvableDistribution = false;
    let solvabilityInfo;
    for (let runs = 0; !solvableDistribution; runs++) {
      if (runs >= 1000) {
        Logger.log(`Couldn't generate both a map and a valid item distribution for that map in 1,000 tries`, DebugLevels.FATAL);
        return null;
      }

      // First randomize rooms if necessary and try to find an orientation
      // where the end is properly connected to the start
      if (resolvedConfig.randomizeDoors) {
        // Shuffle doors
        // TODO: I want to improve my first draft and also work on a second draft eventually
        const solvabilityConfig = {
          progression: requirements.progression,
          startingInventory: Object.values(Keys),
          startRoom: startingRoom.address,
          fullSearch: resolvedConfig.ensureFullyClearable,
        };
        const solvabilityTest = (areas) => {
          const solvability = isSolvable(areas, solvabilityConfig);
          return resolvedConfig.ensureFullyClearable ? solvability.fullyClearable : solvability.isSolvable;
        }
        areas = this._entranceRandomizer.executeUntilSuccessful(getFreshAreas, this._random, startingRoom, solvabilityTest);

        if (!areas) {
          return null;
        }
      }

      if (config.randomizeItems) {
        // Place items around the map
        // TODO: I want to add different item distribution logic choices.
        // Right now I have pure random, but I want to implement my sphered progression placement logic,
        // which would look at locks to sphere 2, pick a random progression item, and place it in sphere 1
        // and then repeat for sphere 3, placing weights on distributing to more recent spheres.
        let itemPlacementSuccess = this._itemRandomizer.execute(areas, requirements, this._random, startingRoom);
        if (!itemPlacementSuccess) {
          // If we couldn't validly place the items, then skip this room distribution
          // Generally this happens if a map gets generated with no sphere 1 items
          continue;
        }
      }

      // Sanity check to ensure the items were placed logically
      const solvableItemPlacementConfig = {
        progression: requirements.progression,
        startRoom: startingRoom.address,
        fullSearch: true,
      }
      solvabilityInfo = isSolvable(areas, solvableItemPlacementConfig);
      solvableDistribution = resolvedConfig.ensureFullyClearable ? solvabilityInfo.fullyClearable : solvabilityInfo.isSolvable;
    }

    // Write shuffled doors and items to file
    updateDataWithAreaInfo(data, areas);

    /*** Update enemy info ***/
    // No logic necessary here, just shuffle all the enemy souls
    this._enemyProcessor.randomizeSouls();

    // Shuffle all enemy drops amongst each other, which is an easy way to ensure
    // that some of the stronger items aren't available in the drop pool.
    // TODO: finish the true random drops logic
    this._enemyProcessor.shuffleDrops();

    this._enemyProcessor.execute(data, this._random);

    /*** Randomize shop offerings ***/
    // Updates the shop to sell different things
    // TODO: add some logic for the item pool here
    randomizeShop(data, this._random);

    /*** Postprocessing enhancements ***/

    // Update books to describe the newly chosen Dracula souls
    this._postProcessor.updateRequiredSouls(requirements.red, requirements.blue, requirements.yellow);

    // OPTIONAL: Relocate doors and add safety zips
    // TODO: port this logic over from old code
    'relocateDoorLists(data, areas);'
    'writeSafetyZips(data);'

    // Allow cutscene skips without having beaten the game first
    this._postProcessor.addCutsceneSkip();

    // Right now, the pre-Julius shadow door is a major bottleneck in terms of progression
    // such that Chaotic Realm will rarely get progression. However, access to Chaotic Realm
    // can't be granted early because it would defeat the purpose of collecting the Dracula souls, etc.
    // This change would move the shadow door from in front of Julius to in front of Chaos,
    // which would allos Julius to be an earlier boss fight (likely to the dismay of many) and allow
    // Chaotic Realm to hold key progression.
    // This would lead to potentially very challenging/painful seeds because Julius is such a difficult
    // fight and there are no teleporters to easily get in/out of Chaotic Realm. Thus, this is a
    // lower priority task, but I think it'd be an interesting toggle.
    // PRIORITY: LOW
    // DIFFICULTY: MEDIUM
    'relocateShadowDoor(data);'

    // Chronomage destination room is hardcoded so update that to the preceeding room in logic
    // Unfortunately, the code for the Chronomage warp function is rather complicated, and by default
    // seems to be hardcoded to send Soma to x tile coordinate 0 and y tile coordinate 1 (modulo room height)
    // and changing those to more accurately match the preceeding door is a bit more complicated.
    // For now, since this room is always in Inner Quarters, I can safely say that sending to (0, 1)
    // should never move Soma to a location that would be out of logic otherwise, due to the general
    // simplicity of the rooms in the area.
    if (resolvedConfig.randomizeDoors) {
      this._postProcessor.setChronomageDestination(solvabilityInfo.preChronomageRoom.address);
    }

    // If debugging, Add with Bat, Gravekeeper, Skula, Panther, Claimh, and Chaos Ring
    // TODO: actually port this code over
    if ('resolvedConfig.enableDebugDrops') {
      'writeDebugDrops(data);'
    }

    // Update the starting room
    if (resolvedConfig.randomizeDoors) {
      this._postProcessor.setStartingRoom(startingRoom);
    }

    // Remove breakable walls. They might be added back later but for now they complicate logic too much
    // Main concern is that they can lead to a very unsettling user experience where it's not obvious
    // what happened in the room transition.
    if (resolvedConfig.randomizeDoors) {
      this._postProcessor.removeBreakableWalls();
    }

    // Remove boss doors from where they aren't necessary and add boss doors where they are
    if (resolvedConfig.randomizeDoors) {
      this._postProcessor.relocateBossDoors();
    }

    // Remove one-way obstacles. Another logic simplification thing that might get added back later
    // The ones in question are the Top Floor <-> Clock Tower connection, the Forbidden Area <-> Study connection,
    // and possibly the Arena DDR room
    // PRIORITY: MEDIUM
    // DIFFICULTY: LOW
    'removeOneWayObstacles(data);'

    // Place Soma slightly higher when going up through a connector, to ensure he always makes it through.
    // The ground to jump off to go through vertical connectors varies a lot, so the logic only cares if
    // Soma can get through the transition in the first place, and not if he can clear the ledge afterwards
    // PRIORITY: LOW
    // DIFFICULTY: MEDIUM
    'correctVerticalConnectors(data);'

    // Super low priority, but only place wooden doors next to transition rooms
    // TODO: While there's definitely enough padding space to handle this, it feels rather wasteful
    // to keep relocating entity lists if this and relocateBossDoors are ignorant of each other.
    // One option is to maintain full entity lists for rooms that get modified and only do the rewriting
    // once all the entity manipulations have finished. Then, entity lists with no net change in the number
    // of entities don't need to be unnecessarily relocated and rooms with multiple entity additions
    // don't need to be relocated multiple times.
    // PRIORITY: LOW
    // DIFFICULTY: MEDIUM
    'relocateWoodenDoors(data);'

    // Execute all the post processing
    data = this._postProcessor.execute(data, areas);

    return {
      // TODO: generate a real filename
      filename: generateFilename(config.originalFilename, seed, config),
      data: data, // Buffer.from(data)?
    };
  }
}

module.exports = RandomizerEngine;
