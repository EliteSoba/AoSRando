# Entrance
This folder contains the implementation logic for randomizing the doors. It contains a subfolder, `implementations`, which holds various entrance randomization implementation options. Other files in the folder are used to interface the randomization implementation with the actual game data.

## Implementations
This folder contains all entrance randomization implementations. An entrance randomizer should accept two arguments and a third optional argument:
  1. `areas` - The list of Area information used throughout the randomizer, which contains zone and room (and door and item) information.
  1. `random` - The seeded pseudorandom number generator that used throughout the randomizer.
  1. `startingRoom` (optional) - The room where Soma starts. This information is provided because it may be valuable for destination selection logic, but it is not necessary to use this information to generate a fully solvable configuration.
The randomizer should then return an Array of Objects, with each entry being a pairing of doors:
```
  {
    source {Door} - The door object describing the door to modify that Soma enters.
    destination {Door} - The door object describing the door Soma should appear to exit when entering the source door.
  }
```
Note that it's not necessary for the destination of a source door's destination door to be that same source door. Put more simply, Door A -> Door B does not mean that Door B -> Door A. It would actually be impossible to enforce this because Floating Garden has an odd number of doors such that at least two doors must end up having the same destination.

### VanillaEntrances
A very simple entrance randomization template. It's very simple because it doesn't do anything and leaves all doors as they are originally.

### FirstDraftEntranceShuffle
This is my first attempt at an entrance randomizer implementation. For each area, it naively starts with a random room, picks a random door, and picks a new random room to be the destination. Then it looks at all the unmatched doors among the rooms it has picked, and repeats the process with a new random door until all the rooms have been picked. Then, any remaining doors get paired up. Certain doors have special logic to ensure full connectivity (such as the room in Arena with Laevatain), and Graham, Julius, and Chaos don't have randomization to reduce complexity and prevent trivialization of the seed.

## EntranceRandomizer
This class interfaces with the entrance randomization implementations so a user may pick at most one entrance randomizer implementation to use. It then executes the implementation and properly reconnects all the doors accordingly.

## updateAreasWithNewConnections
Helper function that actually handles the reassigning of doors.
