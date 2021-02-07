# Utils
This folder contains a lot of various utility functions and constants for use throughout the project.

## AoSConstants
Contains a lot of constants related to how game data is organized.

### DIR
A simple enum that assigns directions to numpad values for easier matching purposes.

### Zones
A list of every area/zone in the game, providing a name, id, and where the room list for that area starts and ends.

### ENEMY_DNA
An object describing where the data for enemy info starts and ends.

### ENEMY_NAMES
A list of every enemy name in the game.

## AoSUtils
Contains utility functions related to the game itself.

### getOppositeDirection
Helper function that returns the opposite direction of a given `AoSConstants.DIR`

### sortEntityList
Sorts a list of entities based on the dimensions of the room. From LagoLunatic:  
"...the reason the order of the entities matters is because the GBA games linearly load entities from one end of the room to the other for performance reasons"

## DataUtils
Contains utility functions for writing information to the game's data file.

### writeEntity
Writes an entity to its listed address.

### writeItem
Writes an item entity and further updates some information about the flag that gets set/checked for when the item gets picked up.

### writeEndOfEntityList
Writes a hardcoded entity to a given address that denotes the end of a room's entity list.

### writeEntityList
Writes a full entity list to memory at a specified address. Note that the entity list should be sorted from `AoSUtils.sortEntityList` first.

### deleteEntity
Deletes an entity from an entity list and moves all subsequent entities up in the entity list.

### writeEnemy
Updates an enemy's info with new item drops and souls. For now does not handle any stat changes but that can change in the future.

### writeDoor
Writes a door to its listed address.

### updateDataWithAreaInfo
Parses area info for updated doors/items and writes them all to the game data.

## FileUtils
A collection of utility files for directly interfacing with the byte array that represents the game data. Key value is for handling the endianness of the data.

### readData
Reads a certain amount of bytes from a given address.

### readRAM
A lot of code references addresses in RAM that were copied over from ROM, meaning that they're offset by 0x08000000, but still the same data. This function simply handles that offset.

### writeData
Writes a certain amount of bytes to a given address

### writeString
Writes a string to a given address. Key distinction is that strings are in the opposite endianness from most other data, so writeData is poorly equipped to handle them.

## Random
A seedable pseudorandom number generator. This wraps a Mersenne Twister, but can theoretically wrap any pseudorandom number generator implementation. Also adds a few extra functions like shuffling an array.

## SolvabilityUtils
This provides some utility functions that help in determining if a given room/item configuration is solvable.

### canAccess
Given a list of locks that are unlockable, checks if a given set of locks can be unlocked.

### getAvailableExits
Determine which exits from a room are in/accessible given a list of locks that can be unlocked.

### getAvailableItems
Determine which items in a room are in/accessible given a list of locks that can be unlocked.

### isSolvable
Checks to see if it's possible to go from a given starting room to the Chaos boss fight. Can optionally be used to check if every door is accessible, and in addition to solvability will also return information such as which room is right before the Chronomage room in logic.
