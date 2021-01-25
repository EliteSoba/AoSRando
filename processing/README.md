# Processing
This folder just contains some utilities for processing the Aria of Sorrow ROM data. Contains some helper functions to parse various types of data objects in the game file and the script I used to generate the Area data in the first place.

## AoSParsingUtils
This file contains helper functions for parsing data objects in the game file.

### parseEntity
Parses an entity starting at a given address and returns an object describing that entity.

### parseDoor
Parses a door starting at a given address and returns an object describing that door.

### parseRoom
Parses a room starting at a given address and returns an object describing that room, and lists all the entities and doors in that room.

### parseZone
Parses a conceptual zone, which is described by a slice of data containing the addresses of all the rooms in that zone. Returns a list of all the room addresses in that zone.

## parseAoS
A rather hacky script used to generate a JSON object containing the relevant (and a lot of not immediately relevant) information about every room. A lot of various functions scatted across the project were originally written in this file before being abstracted out, and I haven't recently checked if the script is still functioning, so no promises that it'll work fine out of the box. Also contains some commented-out preliminary door randomization experiments.
