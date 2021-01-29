const Souls = require('../items/Souls');
const Enemies = require('./Enemies');
const DebugLevels = require('../debug/DebugLevels');
const Logger = require('../debug/Logger');

const allSouls = [...Souls.Red, ...Souls.Blue, ...Souls.Yellow]
  .filter(soul => !soul.isProgression && !soul.isKindaProgression);

/**
 * Given a list of Enemy DNA, randomly assigns non-progression souls to each enemy,
 * such that each non-progression soul is assigned to at least one enemy.
 * @param  {Enemy[]} enemies - The list of Enemy DNA
 * @param  {Random} random - The seeded pseudorandom number generator
 */
function randomizeEnemySouls(enemies, random) {
  const shuffledSouls = random.shuffle(allSouls);
  const shuffledEnemies = random.shuffle(enemies);

  enemies.forEach((enemy, i) => {
    const chosenSoul = shuffledSouls[i % shuffledSouls.length];

    // soulType is 0-2 for Red, Blue, Yellow, which is exactly 5 off from the respective subtype
    enemy.soulType = chosenSoul.subtype - 5;
    enemy.soul = chosenSoul.id;
    Logger.log(`Assigning soul of ${chosenSoul.name} to ${enemy.name}`, DebugLevels.MARKER);
  });
}

module.exports = randomizeEnemySouls;
