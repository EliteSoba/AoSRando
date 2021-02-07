const AoSUtils = require('../../../utils/AosUtils');
const Logger = require('../../../debug/Logger');
const DebugLevels = require('../../../debug/DebugLevels');

const {
  getOppositeDirection,
} = AoSUtils;

const ROOMS_TO_SKIP_RANDOMIZATION = [
  // Graham Rooms
  0x0851FD70,
  0x0851FAF0,

  // Julius Rooms
  0x08517B70,
  0x085176F8,

  // Pre-Julius Save Room
  0x085179D0,

  // Chaotic Realm rooms
  0x085229A4,
  0x0852253C,
];

const DOORS_TO_SKIP = [
  // This connector is unusually wide, which makes pairing it awkward and often leads to zips.
  // I messed up the logic here a bit though so it needs to get fixed
  // 139524388,
  // 139524548,

  // Chaos boss door and pre-chaos save
  139601196,
  139601516,
  139601532,
  139602324,

  // Doors entering/exiting Graham room
  139590992,
  139590368,
  139591008,
  139590504,

  // Julius into Chaotic
  139556736,
  139556584,
  139556568,
  139557728,

  // The mid-room save in Garden is buggy so skip it for now
  139557312,
  139556416,
];

// These are effectively dead ends but they're inside other rooms
// which makes logic silly sometimes. For now we skip and readd access
// when adding intra-area loops
const DOORS_TO_TEMPORARILY_IGNORE = [
  // Chapel hidden room
  139534100,

  // Reservoir boat room
  139572860,

  // Reservoir waterfall room
  139574476,

  // Reservoir long hall
  139570596,

  // Arena Laevatain
  139584944,

  // Top floor under Graham
  139590520,
];

/**
 * Helper function to determine if a door should be randomized
 * @param  {Door} door - The door to check
 * @param  {uint_32[]} doorsToSkip - The list of door addresses to skip randomization for
 * @return {Boolean} - If the door is valid or not
 */
function isValidDoor(door, doorsToSkip) {
  return !door.isFakeDoor && !doorsToSkip.find(d => d === door.address);
}

/**
 * Helper function to get all the valid doors in a room
 * @param  {Room} room - The room from which the door list should be pulled
 * @param  {uint_32[]} doorsToSkip - The list of door addresses to skip
 * @return {Door[]} - The list of doors that should be randomized
 */
function getRealDoors(room, doorsToSkip) {
  return room.doors.filter(door => isValidDoor(door, doorsToSkip));
}

/**
 * Helper function to get all the valid rooms in an area which should be randomized
 * @param  {Room[]} rooms - The list of rooms that should be filtered
 * @return {Room[]} - The filtered list of rooms which should be randomized
 */
function getRealRooms(rooms) {
  return rooms.filter(room => !room.isWeirdChaoticRealmRoomDoNotModify && ROOMS_TO_SKIP_RANDOMIZATION.indexOf(room.address) === -1);
}

/**
 * Randomize all the doors within a particular area. Note that since this randomization is happening
 * on a per area basis, area transition doors have to be accounted for separately, due to spanning multiple areas.
 * @param  {Area} area - The area information, most significantly containing a list of rooms in the area
 * @param  {Random} random - The shared pseudorandom number generator
 * @param  {Door[]} doorsToSkip - A list of doors to skip. In addition to the weird doors, this list
 *   should also contain the area transition doors for the reason listed above
 * @return {Object[]} - A list of Objects describing source doors and destination doors
 */
function randomizeArea(area, random, doorsToSkip) {
  // Get all the rooms in an area that we want to randomize
  const rooms = getRealRooms(area.rooms);

  // Pick a room at random to start with. It doesn't matter which because
  // the area will be fully connected by the end anyway
  const firstRoom = rooms[0];

  // Maintain a list of all the doors that still need partners, and update
  // as we add new rooms
  let unmatchedDoors = getRealDoors(firstRoom, doorsToSkip);

  // Maintain a list of all the new door pairings that have been decided
  const pairings = [];

  // Logging check to see how many doors each area has and in what directions they point
  let doorCounts = {};
  rooms.forEach(room => getRealDoors(room, doorsToSkip).forEach(door => doorCounts[door.direction] = ~~(doorCounts[door.direction]) + 1));
  Logger.log(`Number of doors for each direction: ${JSON.stringify(doorCounts)}`, DebugLevels.LOG);

  // Keep track of the rooms we haven't picked yet
  let availableRooms = rooms.filter(({ address }) => address !== firstRoom.address);
  for (let iterationCount = 0; availableRooms.length > 0; iterationCount++) {
    if (unmatchedDoors.length === 0) {
      // This will only happen if dead ends get assigned too early and there are no more doors left
      // to assign multi-exit rooms to. This gets taken care of when filtering for valid destination rooms,
      // so this branch should only occur if that logic has a serious flaw.
      Logger.log('Something went wrong with the randomization and we\'re out of doors', DebugLevels.FATAL);
      return false;
    }
    if (iterationCount > 1000) {
      // The issue with this logic is:
      // imagine 4 rooms, one with only a left door(1), one with only a right door(2),
      // one with a right and an up door(3), and one with a left and a down door(4)
      // The only possible fully matching orientation is as follows:
      // 2 - 4
      //     |
      //     3 - 1
      // but the following can also randomly happen:
      //  2 -
      //     - 1
      // |
      // 3 - 4
      //     |
      // which leads to 4 unmatched doors.
      // This can happen on various scales. I don't know if there's a solution with this algorithm
      // so the best bet is just to reroll.
      // Another algorithm would be to take each "dead end" and attach it to a non-dead end room
      // then repeat on any previously non-dead end room that has become a dead end due to losing an exit.
      // That can be in SecondDraftEntranceShuffle.
      // I don't know if areas with cycles will cause issues with that though.
      Logger.log(`Number of unmatched doors: ${unmatchedDoors.length}`, DebugLevels.ERROR);
      unmatchedDoors.forEach(door => Logger.log(`${door.sourceRoom.toString(16)}: ${door._door} - ${door.direction}`, DebugLevels.ERROR));
      Logger.log(`Number of available rooms: ${availableRooms.length}`, DebugLevels.ERROR);
      Logger.log(availableRooms, DebugLevels.ERROR);
      Logger.log('Either something went wrong when assigning doors, or something went unlucky', DebugLevels.ERROR);
      return false;
    }

    // Pick a random door in our list that still doesn't have a destination
    const {
      index: randomDoorIndex,
      value: randomDoor,
    } = random.pickFromArray(unmatchedDoors);

    if (DOORS_TO_TEMPORARILY_IGNORE.indexOf(randomDoor.address) !== -1) {
      // For now, just skip picking a "forbidden" door as progression and leave it for looping.
      // Doesn't forbid it from being the destination but in that case we can just reroll anyway.
      // This one check increases success rate by about 200x.
      // Every attempt I make to also prevent the destination from being chosen just
      // further reduces the success rate.
      continue;
    }

    // Try to find a valid destination room for the chosen door
    Logger.log(`Choosing partner for door: ${randomDoor.address.toString(16)} - ${randomDoor.direction}`, DebugLevels.LOG);
    const oppositeDirection = getOppositeDirection(randomDoor.direction);
    const validRoomPartners = availableRooms
      .filter((room) => {
        const doors = room.doors;
        if (!doors.some(door => door.direction === oppositeDirection && isValidDoor(door, doorsToSkip))) {
          // Ignore all rooms that don't have any valid doors in the right direction
          return false;
        }
        // Check to make sure that if we add this door, we still have more available doors to
        // continue randomization with. This means that the number of available doors after
        // adding this room and reserving the old door should be a positive number.
        // The exception is when we approach the end of the area randomization and there are only
        // a few rooms to work with. Put more simply, we don't need any more unmatched doors if
        // the last room we're placing is a dead end.
        // Zone transition doors are ignored when counting unmatched doors because their destinations
        // are already set. This should still be fine even if zone transition doors become randomized.
        // TODO: Need to stop counting inaccessible doors as valid.
        //   The inaccessible doors will then be handled during the intraarea loops part of the logic
        //   to ensure multiple entrances into the same room.
        //   Will probably need to take note of them separately, to ensure no part of the graph
        //   stays fully disconnected
        //   for now just skip those doors and readd them during the looping
        const validDoors = doors.filter(door => isValidDoor(door, doorsToSkip));
        const newAvailableDoors = validDoors.length + unmatchedDoors.length - 2;
        return newAvailableDoors === availableRooms.length - 1 || newAvailableDoors > 0;
      });
    const chosenRoom = random.pickFromArray(validRoomPartners).value;
    if (!chosenRoom) {
      Logger.log(`No valid pairs for door ${randomDoor.address.toString(16)}`, DebugLevels.WARN);
      continue;
    }

    const partnerDoor = random.pickFromArray(chosenRoom.doors.filter(door => door.direction === oppositeDirection && isValidDoor(door, doorsToSkip))).value;
    pairings.push({ source: randomDoor, destination: partnerDoor });
    pairings.push({ source: partnerDoor, destination: randomDoor });

    // Remove the chosen room from the list of available rooms
    // We're already getting O(n) runtime inside the loop from finding valid room partners
    // which I'm using to justify my laziness here instead of making availableRooms better.
    availableRooms = availableRooms.filter(({ address }) => address !== chosenRoom.address);

    // Remove the chosen door from the list of available unmatched doors
    unmatchedDoors.splice(randomDoorIndex, 1)

    // Add all the other valid doors in the destination room as unmatched doors to consider
    unmatchedDoors = unmatchedDoors.concat(chosenRoom.doors.filter(door => door.address !== partnerDoor.address && isValidDoor(door, doorsToSkip)));
  }

  if (unmatchedDoors.length > 0) {
    // Sanity check. Every 8 should have a 2, 6 should have a 4, and vice versa (except Floating Garden)
    let unmatchedDoorCounts = {};
    unmatchedDoors.forEach(door => unmatchedDoorCounts[door.direction] = ~~unmatchedDoorCounts[door.direction] + 1);
    Logger.log(`Number of unmatched doors in each direction: ${JSON.stringify(unmatchedDoorCounts)}`, DebugLevels.LOG);
    if (unmatchedDoorCounts['8'] !== unmatchedDoorCounts['2'] || unmatchedDoorCounts['4'] !== unmatchedDoorCounts['6']) {
      Logger.log('Warning: Doors don\'t seem to be properly pairable', DebugLevels.WARN);
      Logger.log('This is garden, isn\'t it?', DebugLevels.WARN);
    }

    Logger.log('Current unmatched doors for this area:', DebugLevels.LOG);
    unmatchedDoors.forEach(door => Logger.log(`${door.sourceRoom.toString(16)}: ${door._door} - ${door.direction}`), DebugLevels.LOG);

    // Pair up all the remaining doors
    // This generally only happens if there are cycles in the area
    while (unmatchedDoors.length > 0) {
      if (unmatchedDoors.length === 1) {
        // This only happens in garden. Send them back to the pre-Julius area.
        Logger.log('Doing the Garden-only one-way door assignment', DebugLevels.LOG);
        Logger.log(`The door is ${JSON.stringify(unmatchedDoors[0])}`, DebugLevels.LOG);
        const partnerDoor = {
          "_door": 0,
          "address": 139556384,
          "destination": 139556264,
          "xPos": 255,
          "yPos": 0,
          "destXOffset": 0,
          "destYOffset": 0,
          "destXPos": 784,
          "destYPos": 512,
          "direction": 4,
          "sourceRoom": 139556448,
          "complement": 139556248,
        };
        pairings.push({ source: unmatchedDoors[0], destination: partnerDoor });
        unmatchedDoors = [];
      }
      else {
        const {
          index: randomDoorIndex,
          value: randomDoor,
        } = random.pickFromArray(unmatchedDoors);
        const oppositeDirection = getOppositeDirection(randomDoor.direction);
        const validDoorPartners = unmatchedDoors.filter(door => door.direction === oppositeDirection);
        const partnerDoor = random.pickFromArray(validDoorPartners).value;
        if (partnerDoor) {
          pairings.push({ source: randomDoor, destination: partnerDoor });
          pairings.push({ source: partnerDoor, destination: randomDoor });
          unmatchedDoors = unmatchedDoors.filter(door => door.address !== randomDoor.address && door.address !== partnerDoor.address);
        }
        else {
          Logger.log(`Couldn't find a matching door for ${randomDoor.address.toString(16)}`, Logger.WARN);
        }
      }
    }
  }

  Logger.log(pairings.map(({ source, destination }) => `${source.address.toString(16)} -> ${destination.address.toString(16)}`), DebugLevels.LOG);
  return pairings;
}

/**
 * First attempt at an entrance shuffler.
 * Shuffles all the connections within a given area (with a few exceptions).
 */
function FirstDraftEntranceShuffle(areas, random) {
  // Get a list of all the doors
  let allDoors = {};
  areas.forEach(area => {
    area.rooms.forEach(room => {
      room.doors.forEach(door => {
        if (!door.isFakeDoor) {
          allDoors[door.address] = {
            area: room._area,
            door: door,
            isTransitionRoom: room.isTransitionRoom,
          };
        }
      });
    });
  });

  // Figure out which doors to skip.
  // In addition to the hardcoded doors listed above, this list should also include
  // doors that transition across areas for now.
  const transitionDoors = [];
  Object.values(allDoors).forEach(door => {
    if (door.isTransitionRoom && door.area !== allDoors[door.door.complement].area) {
      Logger.log(`Skipping transition doors ${door.door.address.toString(16)} and ${allDoors[door.door.complement].door.address.toString(16)}`, DebugLevels.LOG);
      transitionDoors.push(door.door);
      transitionDoors.push(allDoors[door.door.complement].door);
    }
    else if (DOORS_TO_SKIP.indexOf(door.door.address) !== -1) {
      Logger.log(`Skipping excluded door ${door.door.address.toString(16)}`, DebugLevels.LOG);
      transitionDoors.push(door.door);
    }
  });

  const doorsToSkip = transitionDoors.map(({ address }) => address);

  // Maintain a list of every new door connection.
  let newConnections = [];
  areas.forEach(area => {
    Logger.log(`Beginning randomization of ${area.area}`, DebugLevels.MARKER);

    // Keep attempting to randomize the area layout until one of the layouts is properly connected.
    let areaConnections;
    for (let attempts = 0; !areaConnections; attempts++) {
      if (attempts !== 0) {
        Logger.log(`Reattempting randomization of ${area.area}`, DebugLevels.MARKER);
      }
      if (attempts >= 1000) {
        Logger.log(`Problem randomizing area: ${area.area}`, DebugLevels.MARKER);
        return false;
      }
      areaConnections = randomizeArea(area, random, doorsToSkip);
    }
    Logger.log(`Completed randomization of ${area.area}`, DebugLevels.MARKER);
    newConnections = newConnections.concat(areaConnections);
  });

  return newConnections;
}

FirstDraftEntranceShuffle.displayName = 'First Draft Entrance Shuffle';
FirstDraftEntranceShuffle.desc = 'Preliminary attempt at randomizing doors in an area by starting at a room'
  + ' and continuing to connect unmatched doors to new rooms, matching all the hanging doors once there are'
  + ' no more rooms to add. Doesn\'t randomize rooms surrounding Graham, Julius, and Chaos.'

module.exports = FirstDraftEntranceShuffle;
