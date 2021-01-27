const DataUtils = require('../utils/DataUtils');

const {
  writeEntity,
} = DataUtils;

const EMPTY_ENTITY = {
  "address": 0,
  "xPos": 0,
  "yPos": 0,
  "type": 0,
  "subtype": 0,
  "varA": 0,
  "varB": 0
};

// Walls that are breakable by attacks
const BREAKABLE_WALL_ADDRESSES = [
  0x085115A8, // Corridor post Creaking Skull
  0x085129E8, // Chapel above Manticore
  0x08513894, // Study big room
  0x08515278, // Dance Hall upper room
  0x08515644, // Dance Hall pre-Inner Quarters room
  0x08516A7C, // Inner Quarters lower hidden room
  0x08516AF4, // Inner Quarters second chained hidden room
  0x08519A44, // Clock Tower room
  0x0851DBD4, // Underground Reservoir eastern hidden room
  0x0851D0D0, // Underground Reservoir near Legion room
  0x08520C60, // Top Floor going up hidden room
  0x08520D44, // Top Floor behind Iron Golem
  0x08521C7C, // Forbidden Zone
];

// Other weird walls
const IRREGULAR_WALL_ADDRESSES = [
  0x0851F6A0, // Arena Lubicant room
]

/**
 * Replaces all breakable wall entities with zeroes.
 * @param  {Byte[]} data - The game data to update
 */
function removeBreakableWalls(data) {
  [...BREAKABLE_WALL_ADDRESSES, ...IRREGULAR_WALL_ADDRESSES].forEach((address) => {
    const zeroedEntity = {
      ...EMPTY_ENTITY,
      address,
    };

    writeEntity(data, zeroedEntity);
  });
}

module.exports = removeBreakableWalls;
