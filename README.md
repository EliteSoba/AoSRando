# Aria of Sorrow Randomizer
## About
Author: [@Elite_Soba](https://twitter.com/Elite_Soba)

Inspired by work from
 *  abyssonym's [original AoS rando project](https://github.com/abyssonym/aos_rando)
 *  LagoLunatic's [DSVania rando project](https://github.com/LagoLunatic/dsvrandom) and [handheld vania editor](https://github.com/LagoLunatic/DSVEdit)

This randomizer draws a lot of ideas from the aforementioned AoS and DSVania randomizers, but has been effectively rewritten from scratch.

All code has been written in javascript to allow the randomization to happen in browser instead of by downloading a program, although there is support to run via command line with Node. (At the time of writing, there is no web interface yet and the code hasn't been tested across different browsers yet).

The reason for this rewrite was to legibly reorganize and modularize the entire project. It should now be fairly clear what each folder and file is responsible for. In addition, the modularization makes it easy to replace the randomization logic.

The key new feature of this project is the ability to shuffle all door destinations. This does not modify the locations of rooms on the map (yet), so instead it appears as though you are warping all over the map. Unfortunately, I lack the expertise to implement a proper Magical Ticket item like the DSVania randomizers, so this functionality must be emulated through the use of the following Codebreaker codes:

```
72000014 0309
8200009E 0000
72000014 0309
82000338 0080
72000014 0309
8200033A 0080
72000014 0309
82000334 0000
72000014 0309
82000336 0000
```

With these codes on, by pressing L+R+A+Start and then suspending, you get sent back to the starting room (which has been changed to always be a save room in Castle Corridor)

## Usage
For now, there's just a rough command line interface. Either download and run the appropriate binary or download NodeJS (unsure of what minimum version is supported) and run:
```
node randomizer.js
```

## Current Features
 *  Randomization of door destinations within an area.
 *  Randomization of all castle pickups
 *  Randomization of required souls to achieve the true ending
 *  Also corrects Chronomage's send destination to be the room right before the Chronomage room in logic. Kinda works okay.
 *  Removes all weird/breakable walls when randomizing entrances.
 *  Shuffles enemy item drops/souls.
 *  Randomizes Hammer's shop offerings. For now doesn't guarantee healing or breakable wall progression.
 *  Adds boss doors in front of doors that lead to boss rooms and removes the boss doors that don't. Only in room randomizer

## Up Next
 *  ~~Randomization of Shop items~~
 *  ~~Randomization of Enemy Souls~~
 *  ~~Randomization of Enemy item drops~~
 *  ~~Correction of Chronomage's teleport destination to the room right before the Chronomage room in logic~~
 *  ~~Removal of breakable walls~~
 *  ~~Relocation of boss doors to more accurate locations~~
 *  ~~Correction of Soma's positional offsets when going through doors~~
 *  Relocation of wooden doors to be next to area transitions
 *  ~~Updating the written file's filename to be more descriptive of the randomizer configuration~~
 *  Actually adding a UI
 *  More interesting text for the Ancient Books

## Further down the line
 *  Relocate the pre-Julius shadow door to right before Chaos. This will allow Chaotic Realm to be more in logic
 *  Full castle entrance shuffle
 *  Room randomizer with modified map
 *  Enemy randomization
 *  Rescaling of enemies based on logical progressive distance from start
 *  More tiered item randomization
 *  More randomized zone transitions
 *  Randomize item effects/costs
 *  Randomize enemy weaknesses/resistances
 *  Randomize attack animations

## Quirks to note
 *  Right now the Ancient Books just list the name of the enemy. This is just for convenience while testing and will be changed later.
 *  There are a few connections that aren't changed for logical reasons:
    *  Doors leading in and out of the Graham boss room aren't changed to avoid trapping the player in a boss fight without the correct Souls
    *  Doors leading in and out of the Julius boss room aren't changed to ensure at the very least Graham must be defeated before entering the Chaotic Realm
    *  The room right before the Chaos boss fight has its left and right doors unchanged, leading to the Chaos boss fight and a save room respectively
    *  The save room in the pre-Julius fight area is unchanged because it's a weird room transition that's in the middle of a room instead of at the edges
    *  The wide vertical connector leading from Castle Corridor to Floating Garden (the one above Flying Armor that can be done with just Malphas but the game expects Malphas+Undine) is unchanged because it's wider than every other connector, which often leads to zips if entering the transition at the edges.
 * A decent number of jumps can be made with Black Panther alone. I'm not sure how much I like this, so I'm not sure if I'll keep it in logic.
 * The starting room is always a save room to allow for immediate access to suspends. This means the beginning cutscene doesn't activate until you find the correct room, so Soma doesn't "start" with the Winged Skeleton Soul. This is because save points don't work well in rooms larger than 1x1.
 * ~~While every seed is guaranteed (I hope) to be solvable, not every seed is guaranteed to be hundoable. Some exits which are only accessible one way (like the bottom half of the staircase room in Top Floor) will get connected to a dead end.~~ Updated to ensure every map is fully clearable.
    * ~~Actually, there might be an exception. Graham might not be accessible except via zips if the Top Floor rooms get placed in an unfortunate way.~~ Fixed this to ensure Graham is accessible
