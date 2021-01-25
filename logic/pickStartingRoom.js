/**
 * Helper function to pick a random save room to use as the starting room
 * @param  {Areas} areas - The list of all areas
 * @param  {Random} random - The shared pseudorandom number generator
 * @param  {String} [area="Castle Corridor"] - The name of the starting area, defaulting to Castle Corridor
 * @return {Room} - Object describing a room.
 */
function pickStartingRoom(areas, random, area = "Castle Corridor") {
  const chosenArea = areas.find(zone => zone.area === area);
  if (!chosenArea) {
    throw 'Invalid zone chosen';
  }

  return random.pickFromArray(chosenArea.rooms.filter(room => room.isSaveRoom)).value;
};

module.exports = pickStartingRoom;
