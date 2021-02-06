/**
 * Given a list of Enemy DNA, shuffles the regular drops among the enemies that normally drop items
 * @param  {Enemy[]} enemies - The list of Enemy DNA
 * @param  {Random} random - The seeded pseudorandom number generator
 */
function shuffleEnemyDrops(enemies, random) {
  const allDrops = [].concat(...enemies.map(({ item1, item2 }) => [item1, item2]))
    .filter(item => item !== 0);
  const newDrops = random.shuffle(allDrops);

  let curIndex = 0;
  enemies.forEach((enemy) => {
    if (enemy.item1) {
      enemy.item1 = newDrops[curIndex++];
    }
    if (enemy.item2) {
      enemy.item2 = newDrops[curIndex++];
    }
  });
}

module.exports = shuffleEnemyDrops;
