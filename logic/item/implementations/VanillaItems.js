/**
 * An item "randomizer" that doesn't do anything.
 * Also serves as a template for future item randomizer implementations.
 */
function VanillaItems(areas, requirements, random, startingRoom) {
  return true;
}

VanillaItems.displayName = 'Vanilla';
VanillaItems.desc = 'Doesn\'t change any of the items. Generally causes issues with solvability checks.'

module.exports = VanillaItems;
