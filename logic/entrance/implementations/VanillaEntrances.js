/**
 * An entrance "randomizer" that doesn't do anything.
 * Also serves as a template for future entrance randomizer implementations.
 */
function VanillaEntrances(areas, random, startingRoom) {
  return {};
}

VanillaEntrances.displayName = 'Vanilla';
VanillaEntrances.desc = 'Doesn\'t change any of the entrances.'

module.exports = VanillaEntrances;
