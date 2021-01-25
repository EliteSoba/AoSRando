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

const PostProcessor = require('./postprocessing/PostProcessor');

const ItemRandomizer = require('./logic/item/FullRandom');
const EntranceRandomizer = require('./logic/entrance/FirstDraftEntranceShuffle');

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
  EntranceRandomizer(areas, random, startingRoom);
  return areas;
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

  const areas = getFreshAreas();
  const requirements = determineRequirements(random);
  // console.log(requirements);

  // Change the starting room to one of the Corridor save rooms
  // This replaces the "add save statue to starting room" idea
  // because save statues seem to be really finnicky.
  // The idea will roughly be to swap the address of the save room
  // with that of the starting room in the room list (around the 0x0050E9AC range)
  // The actual writing should probably occur in postprocessing
  // PRIORITY: DONE
  const startingRoom = pickStartingRoom(areas, random);

  // Shuffle doors
  // PRIORITY: DONE, improvable
  // DIFFICULTY: EXTREME
  const shuffledMap = shuffleMap(areas, random, startingRoom);

  Logger.log(`Starting at ${startingRoom.address.toString(16)}`, DebugLevels.LOG);

  // Sanity check to ensure the end is even accessible
  if (!isSolvable(shuffledMap, requirements, Object.values(Keys), startingRoom.address)) {
    Logger.log('Current map orientation isn\'t solvable even with all progression items', DebugLevels.ERROR);
  }

  // Place items around the map
  // PRIORITY: DONE, improvable
  // DIFFICULTY: EXTREME
  const itemedMap = placeItems(shuffledMap, requirements, random, startingRoom);

  // Sanity check to ensure the items were placed logically
  if (!isSolvable(itemedMap, requirements.progression, [], startingRoom.address)) {
    Logger.log('Current item distribution doesn\'t work', DebugLevels.ERROR);
  }

  // Write shuffled doors and items to file
  // PRIORITY: DONE
  'writeGameInfo(data, itemedMap);'
  updateDataWithAreaInfo(data, itemedMap);

  const postProcessor = new PostProcessor(data);

  // Update books
  // PRIORITY: DONE
  postProcessor.updateRequiredSouls(requirements.red, requirements.blue, requirements.yellow);

  // Updates the shop to sell different things
  // PRIORITY: HIGH
  // DIFFICULTY: MEDIUM
  'updateShop(data)';

  // No logic necessary here, just shuffle all the enemy souls
  // PRIORITY: HIGH
  // DIFFICULTY: MEDIUM
  'shuffleEnemySouls(data);'

  // Minimal logic here. Change drops and make sure to exclude books/skull key
  // PRIORITY: HIGH
  // DIFFICULTY: MEDIUM
  'randomizeEnemyDrops(data);'

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
  // PRIORITY: HIGH
  // DIFFICULTY: MEDIUM
  'changeChronomageDestination(data);'

  // If debugging, Add with Bat, Skula, Panther,  and Chaos Ring
  if ('settings.enableDebugDrops') {
    // PRIORITY: DONE
    'writeDebugDrops(data);'
  }

  // Actually register the starting room
  // PRIORITY: DONE
  postProcessor.setStartingRoom(startingRoom);

  // Remove breakable walls. They might be added back later but for now they complicate logic too much
  // PRIORITY: MEDIUM
  // DIFFICULTY: LOW
  'removeBreakableWalls(data);'

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

  // Remove boss doors from where they aren't necessary and add boss doors where they are
  // PRIORITY: MEDIUM
  // DIFFICULTY: MEDIUM
  'relocateBossDoors(data);'

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
      Logger.log('Error writing file:', DebugLevels.ERROR);
      Logger.log(err, DebugLevels.ERROR);
    });
  }
}

function main() {
  fs.readFile('.\\aos.gba', (error, data) => {
    if (error) {
      Logger.log('Error reading file:', DebugLevels.ERROR);
      Logger.log(error, DebugLevels.ERROR);
      return;
    }

    doRandomization([...data]);
  });
}

main();
