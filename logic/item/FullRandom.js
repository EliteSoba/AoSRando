const SolvabilityUtils = require('../../utils/SolvabilityUtils');
const Souls = require('../../items/Souls');
const Money = require('../../items/Money');
const Equipment = require('../../items/Equipment');
const Consumables = require('../../items/Consumables');

const Logger = require('../../debug/Logger');
const DebugLevels = require('../../debug/DebugLevels');

const {
  Weapons,
  Armor,
  Accessories
} = Equipment;

const {
  HP,
  MP,
  Status,
  Damage,
  Unusable
} = Consumables;

const { isSolvable } = SolvabilityUtils;

const {
  Red,
  Blue,
  Yellow,
} = Souls;

const config = {
  decoySoulsMean: 8,
  decoySoulsStd: 1,
  equipmentRatioMean: 40,
  equipmentRatioStd: 5
};

/**
 * Very simple item randomization logic. Randomly places progression items around the map, and
 * randomly fills the remaining drops with equipment and consumables. Then checks if this configuration
 * is solvable, and retries until it gets a successful configuration.
 *
 * Main issue with this approach is that there's no tiering of equipment/progression strength,
 * so there's a decent probability of very strong equipment being available very early.
 * Also progression can feel very underwhelming if flight is found early or keys are frontloaded.
 *
 * @param  {Areas} areas - The list of Areas
 * @param  {Requirements} requirements - Object containing the list of progression mappings and the Dracula soul info
 * @param  {Random} random - Shared pseudorandom number generator
 * @param  {Room} startingRoom - Object describing the starting room, to determine solvability
 */
function FullRandom(areas, requirements, random, startingRoom) {
  // Shallow copies makes this rather straightforward
  const allItems = [];
  areas.forEach((area) => {
    area.rooms.forEach((room) => {
      allItems.push(...room.items);
    });
  });

  const chosenItems = [];
  chosenItems.push(...Object.values(requirements.progression));

  const {
    decoySoulsMean,
    decoySoulsStd,
    equipmentRatioMean,
    equipmentRatioStd
  } = config;

  // lol imagine caring about a proper normal distribution in this logic
  // 40% at mean, 30% at +-1, 20% at +-2, 10% at +-3
  const vaguelyNormalDistribution = (random, mean, std) => {
    return mean + random.randomSign() * Math.round(Math.pow(random.random(), 2) * std * 3);
  };

  const redDecoyCount = vaguelyNormalDistribution(random, decoySoulsMean, decoySoulsStd);
  const blueDecoyCount = vaguelyNormalDistribution(random, decoySoulsMean, decoySoulsStd);
  const yellowDecoyCount = vaguelyNormalDistribution(random, decoySoulsMean, decoySoulsStd);

  Logger.log(`Adding ${redDecoyCount} red decoys to the pool`, DebugLevels.LOG);
  const redDecoys = random.shuffle(Red)
    .filter(soul => soul.id !== requirements.red.id)
    .filter(soul => !soul.isProgression && !soul.isKindaProgression)
    .slice(0, redDecoyCount);

  Logger.log(`Adding ${blueDecoyCount} blue decoys to the pool`, DebugLevels.LOG);
  const blueDecoys = random.shuffle(Blue)
    .filter(soul => soul.id !== requirements.blue.id)
    .filter(soul => !soul.isProgression && !soul.isKindaProgression)
    .slice(0, blueDecoyCount);

  Logger.log(`Adding ${yellowDecoyCount} yellow decoys to the pool`, DebugLevels.LOG);
  const yellowDecoys = random.shuffle(Yellow)
    .filter(soul => soul.id !== requirements.yellow.id)
    .filter(soul => !soul.isProgression && !soul.isKindaProgression)
    .slice(0, yellowDecoyCount);

  chosenItems.push(...redDecoys, ...blueDecoys, ...yellowDecoys);

  const remainingItems = allItems.length - chosenItems.length;
  const allEquipment = [...Weapons, ...Armor, ...Accessories];
  const everythingElse = [
    ...HP,
    ...MP,
    ...Status,
    ...Damage,
    ...(Unusable.filter(item => !item.doNotUse && !item.isProgression)),
    ...Money
  ];

  const equipmentRatio = vaguelyNormalDistribution(random, equipmentRatioMean, equipmentRatioStd);
  const equipmentCount = Math.round(equipmentRatio * remainingItems / 100);

  Logger.log(`Adding ${equipmentCount} pieces of equipment to the pool`, DebugLevels.LOG);
  chosenItems.push(...(random.shuffle(allEquipment).slice(0, equipmentCount)));


  Logger.log(`Adding ${allItems.length - chosenItems.length} consumables to the pool`, DebugLevels.LOG);
  while (chosenItems.length < allItems.length) {
    chosenItems.push(random.pickFromArray(everythingElse).value);
  }

  Logger.log('Attempting to place items', DebugLevels.MARKER);
  let iterations = 0;
  while (!isSolvable(areas, requirements.progression, [], startingRoom.address)) {
    if (iterations !== 0) {
      Logger.log('Reattempting item randomization', DebugLevels.MARKER);
    }
    // TODO: this doesn't handle hard mode items too well.
    // An alternate approach is to filter allItems for non-hard mode items,
    // and then pull 5 more non-progression items to fill the hard mode slots.
    const shuffledItems = random.shuffle(chosenItems);
    allItems.forEach((item, i) => {
      const replacement = shuffledItems[i];
      item.type = 4;
      item.subtype = replacement.subtype;
      item.varB = replacement.id;
    });

    if (++iterations >= 1000) {
      Logger.log(`Couldn't generate a valid distribution in 1,000 tries.`, DebugLevels.ERROR);
      throw 'Oops, this is iterating a lot';
    }
  }

  Logger.log(`Completed item placements in ${iterations} ${iterations === 1 ? 'try' : 'tries'}`, DebugLevels.MARKER);

  return areas;
}

module.exports = FullRandom;
