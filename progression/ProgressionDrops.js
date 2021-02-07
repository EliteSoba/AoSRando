const Keys = require('./Keys');
const Souls = require('../items/Souls');
const Consumables = require('../items/Consumables');

const {
  Red,
  Blue,
  Yellow,
  Ability,
} = Souls;

const {
  Unusable,
} = Consumables;

/** Effectively a mapping of Keys to the relevant drop. TODO: Why didn't I make this just a map-like Object? */
/**
 * Gets a fresh mapping from Keys to the relevant drops associated with those keys.
 * The fresh mapping is valuable because it allows modifications to happen easily and non-committally.
 * @return {Object} A map of Key-Item pairs
 */
function getFreshProgressionDrops() {
  const ProgressionDrops = {
    [Keys.GRAVEKEEPER]: Ability[0],
    [Keys.ARMOR]: Blue[0],
    [Keys.MALPHAS]: Ability[2],
    [Keys.SLIDE]: Ability[1],
    [Keys.UNDINE]: Yellow[0],
    [Keys.SKULA]: Yellow[1],
    [Keys.BAT]: Blue[1],
    [Keys.HIPPOGRYPH]: Ability[4],
    [Keys.RED]: Red[43],
    [Keys.BLUE]: Blue[1],
    [Keys.YELLOW]: Yellow[6],
    [Keys.REDBOOK]: Unusable[1],
    [Keys.BLUEBOOK]: Unusable[2],
    [Keys.YELLOWBOOK]: Unusable[3],
    [Keys.MANTICORE]: Blue[18],
    [Keys.CURLY]: Blue[19],
    [Keys.DEVIL]: Blue[17],
    [Keys.PANTHER]: Blue[2],
    [Keys.GALAMOTH]: Ability[5],
  };

  return ProgressionDrops;
}

module.exports = getFreshProgressionDrops;
