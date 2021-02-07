const SolvabilityUtils = require('../../../utils/SolvabilityUtils');

const Souls = require('../../../items/Souls');
const Money = require('../../../items/Money');
const Equipment = require('../../../items/Equipment');
const Consumables = require('../../../items/Consumables');

const Logger = require('../../../debug/Logger');
const DebugLevels = require('../../../debug/DebugLevels');

const {
  Weapons,
  Armor,
  Accessories,
} = Equipment;

const {
  HP,
  MP,
  Status,
  Damage,
  Unusable,
} = Consumables;

const {
  isSolvable,
} = SolvabilityUtils;

const {
  Red,
  Blue,
  Yellow,
} = Souls;

const config = {
  decoySoulsMean: 8,
  decoySoulsStd: 1,
  equipmentRatioMean: 40,
  equipmentRatioStd: 5,
};

/**
 * Very simple item randomization logic. Randomly places progression items around the map, and
 * randomly fills the remaining drops with equipment and consumables. Then checks if this configuration
 * is solvable, and retries until it gets a successful configuration.
 *
 * Main issue with this approach is that there's no tiering of equipment/progression strength,
 * so there's a decent probability of very strong equipment being available very early.
 * Also progression can feel very underwhelming if flight is found early or keys are frontloaded.
 */
function FullRandom(areas, requirements, random, startingRoom, ensureFullyClearable) {
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
    equipmentRatioStd,
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
    ...Money,
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
  let itemMapping = {};
  const solvabilityConfig = {
    progression: requirements.progression,
    startRoom: startingRoom.address,
    fullSearch: ensureFullyClearable,
  };
  const solvabilityKey = ensureFullyClearable ? 'fullyClearable' : 'isSolvable';
  while (!isSolvable(areas, { ...solvabilityConfig, itemMapping })[solvabilityKey]) {
    itemMapping = {};
    if (iterations % 10 === 1) {
      Logger.log(`Attempt ${iterations}: Reattempting item randomization`, DebugLevels.MARKER);
    }
    // TODO: this doesn't handle hard mode items too well.
    // An alternate approach is to filter allItems for non-hard mode items,
    // and then pull 5 more non-progression items to fill the hard mode slots.
    const shuffledItems = random.shuffle(chosenItems);
    allItems.forEach((item, i) => {
      const replacement = shuffledItems[i];
      itemMapping[item.address] = {
        ...item,
        type: 4,
        subtype: replacement.subtype,
        varB: replacement.id,
      };
    });

    if (++iterations >= 1000) {
      Logger.log(`Couldn't generate a valid distribution in 1,000 tries.`, DebugLevels.ERROR);
      return false;
    }
  }

  Logger.log(`Completed item placements in ${iterations} ${iterations === 1 ? 'try' : 'tries'}`, DebugLevels.MARKER);

  return itemMapping;
}

FullRandom.displayName = 'Full Random Item Distribution';
FullRandom.desc = 'Randomly places all progression items/souls and a random assortment of equipment/consumables'
  + ' such that the seed is solvable, and no other logic beside that.'

module.exports = FullRandom;
