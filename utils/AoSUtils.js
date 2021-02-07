/**
 * Returns the opposite direction from the one provided. 8 pairs with 2 and 6 pairs with 4
 * @param  {number} direction - The original direction
 * @return {number} - The opposite direction
 */
function getOppositeDirection(direction) {
  // Since I'm using numpad directions, subtracting the original value from 10 is sufficient
  return 10 - direction;
}

/**
 * Given a list of entities, returns the list sorted either from left to right
 * or up to down depending on if this is a vertical or horizontal room.
 * @param  {Entity[]} entities - The list of entities to sort
 * @param  {Room} room - The room info, to determine dimensions for the type of sort
 * @return {Entity[]} - The sorted list of entities
 */
function sortEntityList(entities, room) {
  const isVertical = room.mapHeight > room.mapWidth;

  return [...entities].sort((e1, e2) => {
    if (isVertical) {
      return e1.yPos - e2.yPos;
    }
    return e1.xPos - e2.xPos;
  });
}

const AoSUtils = {
  getOppositeDirection,
  sortEntityList,
};

module.exports = AoSUtils;
