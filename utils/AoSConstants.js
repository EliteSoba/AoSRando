
/** Simple way to assign directions via numpad notation */
const DIR = {
  LEFT: 4,
  RIGHT: 6,
  UP: 8,
  DOWN: 2,
};

const CORRIDOR = {
  _name: 'Castle Corridor',
  _area: 0x0,
  first: 0x0050E9AC,
  last: 0x0050EA5C,
};
const CHAPEL = {
  _name: 'Chapel',
  _area: 0x1,
  first: 0x0050EA60,
  last: 0x0050EAA0,
};
const STUDY = {
  _name: 'Study',
  _area: 0x2,
  first: 0x0050EAA4,
  last: 0x0050EAF8,
};
const DANCE = {
  _name: 'Dance Hall',
  _area: 0x3,
  first: 0x0050EAFC,
  last: 0x0050EB6C,
};
const INNER = {
  _name: 'Inner Quarters',
  _area: 0x4,
  first: 0x0050EB70,
  last: 0x0050EBC4,
};
const GARDEN = {
  _name: 'Floating Garden',
  _area: 0x5,
  first: 0x0050EBC8,
  last: 0x0050EC00,
};
const CLOCK = {
  _name: 'Clock Tower',
  _area: 0x6,
  first: 0x0050EC04,
  last: 0x0050EC8C,
};
const RESERVOIR = {
  _name: 'Underground Reservoir',
  _area: 0x7,
  first: 0x0050EC90,
  last: 0x0050ED6C,
};
const ARENA = {
  _name: 'The Arena',
  _area: 0x8,
  first: 0x0050ED70,
  last: 0x0050EDC8,
};
const TOP = {
  _name: 'Top Floor',
  _area: 0x9,
  first: 0x0050EDCC,
  last: 0x0050EE30,
};
const FORBIDDEN = {
  _name: 'Forbidden Area',
  _area: 0xA,
  first: 0x0050EE34,
  last: 0x0050EE60,
};
const CHAOTIC = {
  _name: 'Chaotic Realm',
  _area: 0xB,
  first: 0x0050EE64,
  last: 0x0050EF04,
};

const Zones = [
  CORRIDOR,
  CHAPEL,
  STUDY,
  DANCE,
  INNER,
  GARDEN,
  CLOCK,
  RESERVOIR,
  ARENA,
  TOP,
  FORBIDDEN,
  CHAOTIC, // Note: pay special attention because a lot of chaotic realm rooms are special
];

const ENEMY_DNA = {
  first: 0x000E9644,
  last: 0x000EA604,
}

const ENEMY_NAMES = [
  "Bat",
  "Zombie",
  "Skeleton",
  "Merman",
  "Axe Armor",
  "Skull Archer",
  "Peeping Eye",
  "Killer Fish",
  "Bone Pillar",
  "Blue Crow",
  "Buer",
  "White Dragon",
  "Zombie Soldier",
  "Skeleton Knight",
  "Ghost",
  "Siren",
  "Tiny Devil",
  "Durga",
  "Rock Armor",
  "Giant Ghost",
  "Winged Skeleton",
  "Minotaur",
  "Student Witch",
  "Arachne",
  "Fleaman",
  "Evil Butcher",
  "Quezlcoatl",
  "Ectoplasm",
  "Catoblepas",
  "Ghost Dancer",
  "Waiter Skeleton",
  "Killer Doll",
  "Zombie Officer",
  "Creaking Skull",
  "Wooden Golem",
  "Tsuchinoko",
  "Persephone",
  "Lilith",
  "Nemesis",
  "Kyoma Demon",
  "Chronomage",
  "Valkyrie",
  "Witch",
  "Curly",
  "Altair",
  "Red Crow",
  "Cockatrice",
  "Dead Warrior",
  "Devil",
  "Imp",
  "Werewolf",
  "Gorgon",
  "Disc Armor",
  "Golem",
  "Manticore",
  "Gremlin",
  "Harpy",
  "Medusa Head",
  "Bomber Armor",
  "Lightning Doll",
  "Great Armor",
  "Une",
  "Giant Worm",
  "Needles",
  "Man-Eater",
  "Fish Head",
  "Nightmare",
  "Triton",
  "Slime",
  "Big Golem",
  "Dryad",
  "Poison Worm",
  "Arc Demon",
  "Cagnazzo",
  "Ripper",
  "Werejaguar",
  "Ukoback",
  "Alura Une",
  "Biphron",
  "Mandragora",
  "Flesh Golem",
  "Sky Fish",
  "Dead Crusader",
  "Kicker Skeleton",
  "Weretiger",
  "Killer Mantle",
  "Mudman",
  "Gargoyle",
  "Red Minotaur",
  "Beam Skeleton",
  "Alastor",
  "Skull Millione",
  "Giant Skeleton",
  "Gladiator",
  "Bael",
  "Succubus",
  "Mimic",
  "Stolas",
  "Erinys",
  "Lubicant",
  "Basilisk",
  "Iron Golem",
  "Demon Lord",
  "Final Guard",
  "Flame Demon",
  "Shadow Knight",
  "Headhunter",
  "Death",
  "Legion",
  "Balore",
  "Belmont",
  "Graham",
  "Chaos"
];

const AoSConstants = {
  DIR,
  Zones,
  ENEMY_DNA,
  ENEMY_NAMES,
};

module.exports = AoSConstants;
