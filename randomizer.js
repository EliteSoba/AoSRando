const Locks = require('./progression/Locks');
const Keys = require('./progression/Keys');
const getFreshAreas = require('./progression/Areas');
const determineAccess = require('./progression/determineAccess');
const SolvabilityUtils = require('./utils/SolvabilityUtils');
const AoSUtils = require('./utils/AosUtils');
const determineRequirements = require('./logic/determineRequirements');
const pickStartingRoom = require('./logic/pickStartingRoom');

const Logger = require('./debug/Logger');
const DebugLevels = require('./debug/DebugLevels');

const DataUtils = require('./utils/DataUtils');

const ItemRandomizer = require('./logic/item/FullRandom');
const EntranceRandomizer = require('./logic/entrance/FirstDraftEntranceShuffle');
const updateAreasWithNewConnections = require('./logic/entrance/updateAreasWithNewConnections');

const PostProcessor = require('./postprocessing/PostProcessor');
const EnemyProcessor = require('./enemies/EnemyProcessor');
const randomizeShop = require('./shop/randomizeShop');

const Areas = getFreshAreas();

const {
  canAccess,
  getAvailableExits,
  isSolvable,
} = SolvabilityUtils;
const {
  getOppositeDirection,
} = AoSUtils;
const {
  updateDataWithAreaInfo
} = DataUtils;

const fs = require('fs');

const Random = require('./utils/Random');

/** Hardcoded starting room address. */
const STARTING_ROOM_ADDRESS = 0x0850EF9C;

/** Hardcoded starting room object */
const STARTING_ROOM_OBJECT = Areas[0].rooms[0];


function shuffleMap(areas, random, startingRoom) {
  const newConnections = EntranceRandomizer(areas, random, startingRoom);
  if (!newConnections) {
    return false;
  }
  updateAreasWithNewConnections(areas, newConnections);
  return true;
}

function placeItems(areas, requirements, random, startingRoom) {
  return ItemRandomizer(areas, requirements, random, startingRoom);
}

function doRandomization(data, settings = {}) {
  // Set up the seed on the randomization for consistency
  // TODO: I also want to add the option to seed the item and entrance randos independently,
  // in case someone finds a good random map and wants to try different item placements on that.
  const random = new Random();
  const seed = 'seed' in settings ? settings.seed : random.random_int31();
  random.init_seed(seed);

  let areas = getFreshAreas();
  const requirements = determineRequirements(random);

  // Determine the starting room. With entrance randomizer, this should be a save room
  // to allow for immediate suspends, but save points don't interact well with the
  // vanilla starting room, I suspect due to it being larger than 1x1.
  let startingRoom = areas[0].rooms[0];
  if (settings.randomizeRooms) {
    startingRoom = pickStartingRoom(areas, random);
  }

  Logger.log(`Starting at ${startingRoom.address.toString(16)}`, DebugLevels.LOG);

  // First attempt to generate a reasonable map, then try to make sure that items
  // can be placed on that map in a solvable manner.
  let solvableDistribution = false;
  let solvabilityInfo;
  for (let runs = 0; !solvableDistribution; runs++) {
    if (runs >= 1000) {
      Logger.log(`Couldn't generate both a map and a valid item distribution for that map in 1,000 tries`, DebugLevels.FATAL);
      return;
    }

    // First randomize rooms if necessary and try to find an orientation
    // where the end is properly connected to the start
    if (settings.randomizeRooms) {
      // Shuffle doors
      // TODO: I want to improve my first draft and also work on a second draft eventually
      let clearable = false;
      let iterations;
      for (iterations = 0; !clearable; iterations++) {
        if (iterations >= 1000) {
          // TODO: should this reattempting be part of the entrance shuffle logic instead?
          // it is for the item randomization, so that'd probably be better.
          Logger.log(`Couldn't generate a valid map in 1,000 tries.`, DebugLevels.FATAL);
          return;
        }
        areas = getFreshAreas();
        shuffleMap(areas, random, startingRoom);

        const solvabilityConfig = {
          progression: requirements.progression,
          startingInventory: Object.values(Keys),
          startRoom: startingRoom.address,
          fullSearch: settings.ensureFullyClearable
        };
        const solvability = isSolvable(areas, solvabilityConfig);

        clearable = settings.ensureFullyClearable ? solvability.fullyClearable : solvability.isSolvable;
      }

      Logger.log(`Attempts to generate a map layout: ${iterations}`, DebugLevels.DEBUG);
    }

    if (settings.randomizeItems) {
      // Place items around the map
      // TODO: I want to add different item distribution logic choices.
      // Right now I have pure random, but I want to implement my sphered progression placement logic,
      // which would look at locks to sphere 2, pick a random progression item, and place it in sphere 1
      // and then repeat for sphere 3, placing weights on distributing to more recent spheres.
      let itemPlacementSuccess = placeItems(areas, requirements, random, startingRoom);
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
      fullSearch: true
    }
    solvabilityInfo = isSolvable(areas, solvableItemPlacementConfig);
    solvableDistribution = settings.ensureFullyClearable ? solvabilityInfo.fullyClearable : solvabilityInfo.isSolvable;
  }


  // Write shuffled doors and items to file
  updateDataWithAreaInfo(data, areas);

  const enemyProcessor = new EnemyProcessor(data, random);

  // No logic necessary here, just shuffle all the enemy souls
  enemyProcessor.randomizeSouls();

  // Shuffle all enemy drops amongst each other, which is an easy way to ensure
  // that some of the stronger items aren't available in the drop pool.
  // TODO: finish the true random drops logic
  enemyProcessor.shuffleDrops();

  enemyProcessor.execute();

  // Updates the shop to sell different things
  // TODO: add some logic for the item pool here
  randomizeShop(data, random);

  const postProcessor = new PostProcessor(data, areas);

  // Update books to describe the newly chosen Dracula souls
  postProcessor.updateRequiredSouls(requirements.red, requirements.blue, requirements.yellow);

  // OPTIONAL: Relocate doors and add safety zips
  // TODO: port this logic over from old code
  'relocateDoorLists(data, Areas);'
  'writeSafetyZips(data);'

  // Allow cutscene skips without having beaten the game first
  postProcessor.addCutsceneSkip();

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
  if (settings.randomizeRooms) {
    postProcessor.setChronomageDestination(solvabilityInfo.preChronomageRoom.address);
  }

  // If debugging, Add with Bat, Gravekeeper, Skula, Panther, Claimh, and Chaos Ring
  // TODO: actually port this code over
  if ('settings.enableDebugDrops') {
    'writeDebugDrops(data);'
  }

  // Update the starting room
  if (settings.randomizeRooms) {
    postProcessor.setStartingRoom(startingRoom);
  }

  // Remove breakable walls. They might be added back later but for now they complicate logic too much
  // Main concern is that they can lead to a very unsettling user experience where it's not obvious
  // what happened in the room transition.
  if (settings.randomizeRooms) {
    postProcessor.removeBreakableWalls();
  }

  // Remove boss doors from where they aren't necessary and add boss doors where they are
  // TODO: See the comment in relocateBossDoors about how this is slightly broken
  if (settings.randomizeRooms) {
    postProcessor.relocateBossDoors();
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
  // PRIORITY: LOW
  // DIFFICULTY: MEDIUM
  'relocateWoodenDoors(data);'

  // Execute all the post processing
  data = postProcessor.execute();

  // Determine the filename based on the original filename, the randomization settings, and the seed
  // PRIORITY: MEDIUM
  // DIFFICULTY: LOW
  const filename = 'test.gba';'determineFilename(settings)';
  if (settings.writeFile) {
    fs.writeFile(filename, Buffer.from(data), err => {
      if (err) {
        Logger.log('Error writing file:', DebugLevels.ERROR);
        Logger.log(err, DebugLevels.ERROR);
      }
      else {
        Logger.log('Successfully wrote file', DebugLevels.MARKER);
      }
    });

    // fs.writeFile('areas.json', JSON.stringify(areas), () => {});
  }
}

function main() {
  fs.readFile('.\\aos.gba', (error, data) => {
    if (error) {
      Logger.log('Error reading file:', DebugLevels.ERROR);
      Logger.log(error, DebugLevels.ERROR);
      return;
    }

    // Note: seed 2 provides an unsolvable seed by making no sphere 0 items accessible
    // I'll leave this here for now to worry about how to handle it in logic later.
    const settings = {
      seed: 3,
      randomizeRooms: true,
      randomizeItems: true,
      writeFile: true,
      ensureFullyClearable: true,
    };
    doRandomization([...data], settings);
  });
}

main();
