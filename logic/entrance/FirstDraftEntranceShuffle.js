const AoSUtils = require('../../utils/AosUtils');
const Logger = require('../../debug/Logger');
const DebugLevels = require('../../debug/DebugLevels');

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

function isValidDoor(door, doorsToSkip) {
  return !door.isFakeDoor && !doorsToSkip.find(d => d === door.address);
}

function getRealDoors(room, doorsToSkip) {
  return room.doors.filter(door => isValidDoor(door, doorsToSkip));
}

function getRealRooms(rooms) {
  return rooms.filter(room => !room.isWeirdChaoticRealmRoomDoNotModify && ROOMS_TO_SKIP_RANDOMIZATION.indexOf(room.address) === -1);
}

function randomizeArea(area, random, doorsToSkip) {
  const rooms = getRealRooms(area.rooms);
  const firstRoom = rooms[0];
  let unmatchedDoors = getRealDoors(firstRoom, doorsToSkip);
  const pairings = [];

  let doorCounts = {};
  rooms.forEach(room => getRealDoors(room, doorsToSkip).forEach(door => doorCounts[door.direction] = ~~(doorCounts[door.direction]) + 1));
  Logger.log(`Number of doors for each direction: ${JSON.stringify(doorCounts)}`, DebugLevels.LOG);

  // Keep track of the rooms we haven't picked yet.
  let availableRooms = rooms.filter(({ address }) => address !== firstRoom.address);
  for (let iterationCount = 0; availableRooms.length > 0; iterationCount++) {
    if (unmatchedDoors.length === 0) {
      Logger.log('Something went wrong with the randomization and we\'re out of doors', DebugLevels.ERROR);
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
      // best bet is just to reroll
      // another algorithm would be to take each "dead end" and attach it to a non-dead end room
      // then repeat on any previously non-dead end room that has become a dead end due to losing an exit
      // that can be in SecondDraftEntranceShuffle.
      // I don't know if areas with cycles will cause issues with that though.
      Logger.log(`Number of unmatched doors: ${unmatchedDoors.length}`, DebugLevels.ERROR);
      unmatchedDoors.forEach(door => Logger.log(`${door.sourceRoom.toString(16)}: ${door._door} - ${door.direction}`, DebugLevels.ERROR));
      Logger.log(`Number of available rooms: ${availableRooms.length}`, DebugLevels.ERROR);
      Logger.log(availableRooms, DebugLevels.ERROR);
      Logger.log('Either something went wrong when assigning doors, or something went unlucky', DebugLevels.ERROR);
      return false;
    }

    const {
      index: randomDoorIndex,
      value: randomDoor,
    } = random.pickFromArray(unmatchedDoors);

    Logger.log(`Choosing partner for door: ${randomDoor.address.toString(16)} - ${randomDoor.direction}`, DebugLevels.LOG);
    const oppositeDirection = getOppositeDirection(randomDoor.direction);
    const validRoomPartners = availableRooms
      .filter(({ doors }) => doors.some(door => door.direction === oppositeDirection && isValidDoor(door, doorsToSkip))) // Find a door with the correct direction
      .filter(({ doors }) => {
        // ensure we always have more edges to work with.
        // unless we're nearing the end in which case, we can stop.
        // zone transitions are ignored and are effectively treated as dead ends
        // this is fine because in the future some arbitrary doors can be chosen as transitions
        // (as long as the directionality ends up being the same)
        const validDoors = doors.filter(door => isValidDoor(door, doorsToSkip));
        const newAvailableDoors = validDoors.length + unmatchedDoors.length - 2;
        return newAvailableDoors === availableRooms.length - 1 || newAvailableDoors > 0;
      });
    const chosenRoom = random.pickFromArray(validRoomPartners).value;
    if (!chosenRoom) {
      // TODO: come up with some way to ensure transitions are left-right
      // isnt this just marking transition exits as being the ones not to randomize lol
      // exclude transition room exits as being valid choices
      // afterwards, add intra-area loops for all remaining connections
      // this should resolve the issue of "adding a weirdly-connected room as the last room"
      // hangingDoors.push(randomDoor);
      Logger.log(`No valid pairs for door ${randomDoor.address.toString(16)}`, DebugLevels.WARN);
      continue;
    }
    unmatchedDoors.splice(randomDoorIndex, 1)

    // Too lazy to come up with a better way for this that won't result in O(n^2) runtime
    availableRooms = availableRooms.filter(({ address }) => address !== chosenRoom.address);

    const partnerDoor = random.pickFromArray(chosenRoom.doors.filter(door => door.direction === oppositeDirection && isValidDoor(door, doorsToSkip))).value;
    pairings.push({ source: randomDoor, destination: partnerDoor });
    pairings.push({ source: partnerDoor, destination: randomDoor });
    unmatchedDoors = unmatchedDoors.concat(chosenRoom.doors.filter(door => door.address !== partnerDoor.address && isValidDoor(door, doorsToSkip)));
  }

  // Sanity check. Every 8 should have a 2, 6 should have a 4, and vice versa.
  if (unmatchedDoors.length > 0) {
    let unmatchedDoorCounts = {};
    unmatchedDoors.forEach(door => unmatchedDoorCounts[door.direction] = ~~unmatchedDoorCounts[door.direction] + 1);
    Logger.log(`Number of unmatched doors in each direction: ${JSON.stringify(unmatchedDoorCounts)}`, DebugLevels.LOG);
    if (unmatchedDoorCounts['8'] !== unmatchedDoorCounts['2'] || unmatchedDoorCounts['4'] !== unmatchedDoorCounts['6']) {
      Logger.log('Warning: Doors don\'t seem to be properly pairable', DebugLevels.WARN);
      Logger.log('This is garden, isn\'t it?', DebugLevels.WARN);
    }

    Logger.log('Current unmatched doors for this area:', DebugLevels.LOG);
    unmatchedDoors.forEach(door => Logger.log(`${door.sourceRoom.toString(16)}: ${door._door} - ${door.direction}`), DebugLevels.LOG);

    // Pair up all the remaining doors.
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
          "complement": 139556248
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

function updateDoor(door, replacement) {
  const keysToReplace = ['destination', 'destXOffset', 'destYOffset', 'destXPos', 'destYPos', 'complement'];
  keysToReplace.forEach(key => door[key] = replacement[key]);
}

function FirstDraftEntranceShuffle(areas, random, startingRoom) {
  let allDoors = {};
  let deepDoorCopiesByComplement = {};
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
        deepDoorCopiesByComplement[door.complement] = {...door};
        if (door.complement2) {
          // Shoutouts to Floating Garden again
          deepDoorCopiesByComplement[door.complement2] = {...door};
        }
      });
    });
  });

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
        return;
      }
      areaConnections = randomizeArea(area, random, doorsToSkip);
    }
    Logger.log(`Completed randomization of ${area.area}`, DebugLevels.MARKER);
    newConnections = newConnections.concat(areaConnections);
  });

  // TODO: seed 5: inaccessible exit got connected to dead end room (arena top room)
  // also in reservoir, and top floor

  newConnections.forEach(({ source, destination }) => {
    // TODO: destXOffset/destYOffset (or maybe destX/YPos?) shouldn't be blindly copied
    // because they're very connector-specific.
    updateDoor(source, deepDoorCopiesByComplement[destination.address]);
  });

  return areas;
}

module.exports = FirstDraftEntranceShuffle;
