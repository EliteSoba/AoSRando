const Souls = require('../items/Souls');
const Keys = require('../progression/Keys');
const getFreshProgressionDrops = require('../progression/ProgressionDrops');

const {
  Red,
  Blue,
  Yellow,
} = Souls;

const RUSH_OPTIONS = [Keys.DEVIL, Keys.MANTICORE, Keys.CURLY];
const RED_OPTIONS = Red.filter(soul => !soul.isProgression);

// Uncertain if I want rush souls to be valid dracula souls because of the sequence break potential
const BLUE_OPTIONS = Blue.filter(soul => !soul.isProgression /*&& !soul.isKindaProgression*/);
const YELLOW_OPTIONS = Yellow.filter(soul => !soul.isProgression);

/**
 * Generates a fresh set of progression mappings where only one rush soul is picked for progression
 * and picks a new red, blue, and yellow soul for the true ending requirements.
 * @param  {Random} random - The pseudorandom number generator this randomization run is using
 * @return {Object} - An object containing the updated mappings between keys and drops,
 *   as well as which souls were chosen as the rush and dracula souls.
 */
function determineRequirements(random) {
  const progression = getFreshProgressionDrops();

  const chosenRush = random.pickFromArray(RUSH_OPTIONS).value;

  RUSH_OPTIONS.filter(rush => rush !== chosenRush)
    .forEach(key => delete progression[key]);

  const rushSoul = progression[chosenRush];

  // Prevent the chosen rush soul from being the chosen blue dracula soul to ease logic a bit.
  const nonDoubleDippingBlue = BLUE_OPTIONS.filter(soul => soul.id !== rushSoul.id);
  const chosenRed = random.pickFromArray(RED_OPTIONS).value;
  const chosenBlue = random.pickFromArray(nonDoubleDippingBlue).value;
  const chosenYellow = random.pickFromArray(YELLOW_OPTIONS).value;

  progression[Keys.RED] = chosenRed;
  progression[Keys.BLUE] = chosenBlue;
  progression[Keys.YELLOW] = chosenYellow;

  return {
    progression,
    red: chosenRed,
    blue: chosenBlue,
    yellow: chosenYellow,
    rush: rushSoul,
  };
}

module.exports = determineRequirements;
