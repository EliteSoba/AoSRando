/**
 * An entrance "randomizer" that doesn't do anything.
 * @param  {Areas} areas - The list of Areas
 * @param  {Random} random - Shared pseudorandom number generator
 * @param  {Room} startingRoom - Object describing the starting room
 */
function VanillaEntrances(areas, random, startingRoom) {
  return [];
}

VanillaEntrances.displayName = 'Vanilla';
VanillaEntrances.desc = 'Doesn\'t change any of the entrances.'

module.exports = VanillaEntrances;
