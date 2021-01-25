/**
 * Returns the opposite direction from the one provided. 8 pairs with 2 and 6 pairs with 4
 * @param  {number} direction - The original direction
 * @return {number} - The opposite direction
 */
function getOppositeDirection(direction) {
  // Since I'm using numpad directions, subtracting the original value from 10 is sufficient
  return 10 - direction;
}


const AoSUtils = {
  getOppositeDirection,
};

module.exports = AoSUtils;
