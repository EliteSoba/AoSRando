# Item
This folder contains the implementation logic for randomizing items. It contains a subfolder, `implementations`, which holds various item randomization implementation options. Other files in the folder are used to interface the randomization implementation with the actual game data.

## Implementations
This folder contains all item randomization implementations. An item randomizer should accept five arguments:
  1. `areas` - The list of Area information used throughout the randomizer, which contains zone and room (and door and item) information.
  1. `requirements` - An object containing the list of progression mappings and the Dracula soul info.
  1. `random` - The seeded pseudorandom number generator that used throughout the randomizer.
  1. `startingRoom` - The room where Soma starts. Unlike for the entrance randomizer, this is significantly more mandatory as item placement logic cares significantly more about which locations are accessible from the start.
  1. `ensureFullyClearable` - Whether or not the item distribution should allow every door to be reached. This gets enforced in the RandomizerEngine, but the check there will rerandomize the map, so it's not ideal to rely only on that check.

The randomizer should then return an Object, where each key is the address of an item and each value holds relevant item data, namely the `type`, `subtype`, and `varB`. Any other item data included will be ignored, such as any attempts to reposition the item by adjusting its `xPos` or `yPos`:
```
  {
    type {number} - The type of item it is. Either 4 for a normal drop or 5 for a hard mode drop.
    subtype {number} - Which item type this item is, ranging from 0 to 8 for Money, Consumables, Equipment, and Souls.
    varB {number} - The index in the subtype's list that this item is.
  }
```
The randomizer should return a falsy value if the randomization failed.

It is possible to further change other entities in a room into items, but this is unadvised as its unlikely that the flags that prevent respawning will be set properly.

### VanillaItems
A very simple item randomization template. It's very simple because it doesn't do anything and leaves all items as they are originally. Note that this interacts poorly with solvability checks because the required Dracula souls will not get placed.

### FullRandom
Another simple item randomizer. This one takes all the progression souls, a subset of more souls to use as decoys, a subset of available equipment, and a subset of consumables and randomly distributes them around the castle, and keeps repeating this until it gets a configuration that's properly solvable. There's no concept of spheres or progression, so all progression can be immediately frontloaded into sphere 1, which may feel undesirable to some players.

## ItemRandomizer
This class interfaces with the item randomization implementations so a user may pick at most one item randomizer implementation to use. It then executes the implementation and returns the new mapping to the `RandomizerEngine` to properly assign if it's satisfied.

## updateAreasWithNewItems
Helper function that actually handles the updating of item objects.
