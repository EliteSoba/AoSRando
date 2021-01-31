const Locks = require('./Locks');
const Keys = require('./Keys');

/** For each Lock, provides a list of Keys or Key combinations that can open that Lock. */
const Reqs = [
  {
    lock: Locks.MALPHAS,
    keys: [
      [Keys.MALPHAS],
      [Keys.BAT],
      [Keys.HIPPOGRYPH]
    ]
  },
  {
    lock: Locks.SKULA,
    keys: [
      [Keys.SKULA]
    ]
  },
  {
    lock: Locks.FLIGHT,
    keys: [
      [Keys.BAT],
      [Keys.HIPPOGRYPH]
    ]
  },
  {
    lock: Locks.FLOAT,
    keys: [
      [Keys.ARMOR],
      [Keys.PANTHER],
      [Keys.MALPHAS],
      [Keys.BAT],
      [Keys.HIPPOGRYPH]
    ]
  },
  {
    lock: Locks.LONG,
    keys: [
      [Keys.ARMOR, Keys.MALPHAS],
      [Keys.PANTHER, Keys.MALPHAS],
      [Keys.BAT],
      [Keys.HIPPOGRYPH]
    ]
  },
  {
    lock: Locks.UNDINE,
    keys: [
      [Keys.UNDINE]
    ]
  },
  {
    lock: Locks.RUSH,
    keys: [
      [Keys.MANTICORE],
      [Keys.CURLY],
      [Keys.DEVIL]
    ]
  },
  {
    lock: Locks.SLIDE,
    keys: [
      [Keys.SLIDE],
      [Keys.BAT]
    ]
  },
  {
    lock: Locks.DRACULA,
    keys: [
      [Keys.RED, Keys.BLUE, Keys.YELLOW, Keys.REDBOOK, Keys.BLUEBOOK, Keys.YELLOWBOOK]
    ]
  },
  {
    lock: Locks.GRAVEKEEPER,
    keys: [
      [Keys.GRAVEKEEPER]
    ]
  },
  {
    lock: Locks.GALAMOTH,
    keys: [
      // [Keys.CHRONOMAGE], // Using Chronomage Soul gets you past Chronomage but it's not in logic
      [Keys.GALAMOTH]
    ]
  },
  {
    lock: Locks.BAT, // lmao literally for the clock spike room and 3 items and two hard mode only
    keys: [
      [Keys.BAT]
    ]
  },
  {
    lock: Locks.PANTHER,
    keys: [
      [Keys.PANTHER]
    ]
  },
  {
    lock: Locks.SMALL,
    keys: [
      [Keys.MALPHAS],
      [Keys.PANTHER], // I'm not sure how I feel about this one. Don't like giving out Panther too early and it feels like weird logic.
      [Keys.BAT],
      [Keys.HIPPOGRYPH]
    ]
  },
  {
    lock: Locks.GRAHAM,
    keys: [
      [Keys.GRAHAM]
    ]
  },
  {
    lock: Locks.SHOP,
    keys: [
      [Keys.HAMMER, Keys.SHOP]
    ]
  }
];

module.exports = Reqs;
