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
// const STARTING_ROOM_OBJECT = Areas.find({ area } => area === 'Castle Corridor').rooms
//   .find({ address } => address === STARTING_ROOM_ADDRESS);
const STARTING_ROOM_OBJECT = Areas[0].rooms[0];


function shuffleMap(areas, random, startingRoom) {
  // noop for now
  // For each area
  // pick a starting room or get a default room for corridor/chaotic
  // don't randomize garden for now
  // create a list of new doors
  // pick a door at random and have it go to a random room
  //   unless the door is a transition to a new zone, then record this door
  // add that new room's doors to the list
  // once we're out of new rooms, the remaining doors should probably be
  //  able to be connected together due to constant number of edges and vertices
  // when connecting a new area to an old one, make sure the doors work
  // ensure connections between:
  //   Corridor - Reservoir x 2
  //   Corridor - Chapel
  //   Corridor - Dance Hall
  //   Corridor - Inner Quarter
  //   Corridor - Floating Garden
  //   Corridor - Clock Tower
  //   Corridor - Top Floor
  //   Chapel - Study
  //   Study - Forbidden
  //   Dance Hall - Inner Quarter
  //   Inner Quarter - Top Floor
  //   Floating Garden - Clock Tower
  //   Clock Tower - Top Floor
  //   Reservoir - Arena
  //   Reservoir - Forbidden
  // Unsure of how to proceed with the Garden - Chaotic connection.
  // Also for Chaotic, don't randomize the last three rooms for consistency
  //  (Chaos first room, door leading to that, and save room opposite Chaos)
  //shuffleCorridor(areas[0], random, startingRoom);
  const newConnections = EntranceRandomizer(areas, random, startingRoom);
  if (!newConnections) {
    return false;
  }
  updateAreasWithNewConnections(areas, newConnections);
  return true;
}

function placeItems(areas, requirements, random, startingRoom) {
  // noop for now
  // Approach one is place every single item randomly and then check for completability
  // Approach two is more nuanced and my personal favorite:
  // Starting from the beginning, find all sphere 1 items,
  // find all room/item locks, and pick a random progression item that unlocks stuff
  //   place this progression item randomly
  // find all sphere 2 items, and do the same thing for finding the next progression item
  //   pick a new location, weighing sphere 2 locations slightly heavier than sphere 1
  // repeat, continuously adding weight to higher spheres and lowering weight for lower spheres
  // exclude dracula books and souls from this, and place them all randomly after all progression has been placed
  return ItemRandomizer(areas, requirements, random, startingRoom);
}

function doRandomization(data, settings = {}) {
  // Set up the seed on the randomization for consistency
  // PRIORITY: DONE
  const random = new Random();
  const seed = 'seed' in settings ? settings.seed : random.random_int31();
  random.init_seed(seed);

  let areas = getFreshAreas();
  const requirements = determineRequirements(random);

  // Change the starting room to one of the Corridor save rooms
  // This replaces the "add save statue to starting room" idea
  // because save statues seem to be really finnicky.
  // The idea will roughly be to swap the address of the save room
  // with that of the starting room in the room list (around the 0x0050E9AC range)
  // The actual writing should probably occur in postprocessing
  // PRIORITY: DONE
  let startingRoom = areas[0].rooms[0];
  if (settings.randomizeRooms) {
    startingRoom = pickStartingRoom(areas, random);
  }

  Logger.log(`Starting at ${startingRoom.address.toString(16)}`, DebugLevels.LOG);

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
      // PRIORITY: DONE, improvable
      // DIFFICULTY: EXTREME
      let clearable = false;
      let iterations;
      for (iterations = 0; !clearable; iterations++) {
        if (iterations >= 1000) {
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
      // PRIORITY: DONE, improvable
      // DIFFICULTY: EXTREME
      let itemPlacementSuccess = placeItems(areas, requirements, random, startingRoom);
      if (!itemPlacementSuccess) {
        // If we couldn't validly place the items, then skip this room distribution
        // continue;
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
  // PRIORITY: DONE
  updateDataWithAreaInfo(data, areas);

  const enemyProcessor = new EnemyProcessor(data, random);

  // No logic necessary here, just shuffle all the enemy souls
  // PRIORITY: DONE
  enemyProcessor.randomizeSouls();

  // Minimal logic here. Change drops and make sure to exclude books/skull key
  // PRIORITY: HIGH
  // DIFFICULTY: MEDIUM
  enemyProcessor.shuffleDrops();

  enemyProcessor.execute();

  // Updates the shop to sell different things
  // PRIORITY: DONE, improvable
  randomizeShop(data, random);

  const postProcessor = new PostProcessor(data, areas);

  // Update books
  // PRIORITY: DONE
  postProcessor.updateRequiredSouls(requirements.red, requirements.blue, requirements.yellow);

  // OPTIONAL: Relocate doors and add safety zips
  // PRIORITY: DONE
  'relocateDoorLists(data, Areas);'
  'writeSafetyZips(data);'

  // Allow cutscene skips without having beaten the game first
  // PRIORITY: DONE
  postProcessor.addCutsceneSkip();

  // Shadow door unlocks when Graham is beaten.
  // Replace the pre-Chaos door with it and remove the one in Floating Garden
  // PRIORITY: MEDIUM
  // DIFFICULTY: MEDIUM
  'relocateShadowDoor(data);'

  // Chronomage destination room is hardcoded so update that to the preceeding room in logic
  // If that doesn't work due to room coordinates, then change it to be the same room but on the
  // left/right side
  // PRIORITY: DONE
  if (settings.randomizeRooms) {
    //postProcessor.setChronomageDestination(solvabilityInfo.preChronomageRoom.address);
  }

  // If debugging, Add with Bat, Skula, Panther,  and Chaos Ring
  if ('settings.enableDebugDrops') {
    // PRIORITY: DONE
    'writeDebugDrops(data);'
  }

  // Actually register the starting room
  // PRIORITY: DONE
  if (settings.randomizeRooms) {
    postProcessor.setStartingRoom(startingRoom);
  }

  // Remove breakable walls. They might be added back later but for now they complicate logic too much
  // PRIORITY: DONE
  if (settings.randomizeRooms) {
    postProcessor.removeBreakableWalls();
  }

  // Remove boss doors from where they aren't necessary and add boss doors where they are
  // PRIORITY: DONE
  if (settings.randomizeRooms) {
    postProcessor.relocateBossDoors();
  }

  // Remove one-way obstacles. Another logic simplification thing that might get added back later
  // PRIORITY: MEDIUM
  // DIFFICULTY: LOW
  'removeOneWayObstacles(data);'

  // Place Soma slightly higher when going up through a connector, to ensure he always makes it through
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
