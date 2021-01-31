const Locks = require('../progression/Locks');
const getFreshProgressionDrops = require('../progression/ProgressionDrops');
const determineAccess = require('../progression/determineAccess');

const Logger = require('../debug/Logger');
const DebugLevels = require('../debug/DebugLevels');

const SPECIAL_DOOR_LOCKS = [
  {
    key: "isJuliusDoor",
    locks: [Locks.DRACULA]
  },
  {
    key: "isWeirdAnnoyingOneWayTopFloorRoom",
    locks: [Locks.INACCESSIBLE]
  },
  {
    key: "isWeirdAnnoyingOneWayForbiddenAreaRoom",
    locks: [Locks.INACCESSIBLE]
  }
];

/**
 * Determines if the available access can get Soma through the given locks
 * @param  {Locks[]} locks - A list of locks, or a list of list of locks
 * @param  {Locks[]} access - A list of the current locks Soma can currently open, derived from determineAccess
 * @return {boolean} If the given list is a list of locks, returns if all the locks can be opened
 *   If the given list is a list of lists of locks, returns true if any of the lock lists can be opened
 */
function canAccess(locks, access) {
  // TODO: I lazy moded this when I realized I messed up with Locks[] and Locks[][]
  // There's probably a better, more recursive way
  const wrappedLocks = Array.isArray(locks[0]) ? locks : [locks];

  // Check if any lock combo gets fully opened based on the current access
  return wrappedLocks.some(lockCombo => {
    return lockCombo.every(lock => access.indexOf(lock) !== -1);
  });
}

/**
 * Gets a list of every door Soma can currently access from this door
 * Assumes Soma can return through the door he came in from, which technically isn't always true
 * but can be made to be true with Magical Tickets.
 *
 * @param  {ROOM} room - The room object Soma is currently in
 * @param  {DWORD} entryDoorAddress - 8 bytes. The address of the door Soma came through
 * @param  {Locks[]} access - A list of the locks Soma can currently open, derived from determineAccess
 * @return {Object} - An object containing two lists describing the status of each door
 *   {DOOR[]} Object.available - The available exits from this room
 *   {DOOR[]} Object.locked - The exits currently not available, updated to have information about what locks it
 */
function getAvailableExits(room, entryDoorAddress, access) {
  const doors = room.doors;

  // Find the door Soma came through
  const entryDoor = doors.find(door => door.address === entryDoorAddress);

  // If we can't find the entry door's entry, return an empty list.
  if (!entryDoor) {
    // TODO: maybe add a debug message here?
    return [];
  };

  // Get a list of all the doors that have restricted access
  const restrictedAccess = (entryDoor.access && entryDoor.access.doors) || [];

  // Some doors have unique locks that depend on randomization settings
  // TODO: technically, this should do concats to existing locks if they exist
  // but every room is with these weird conditions is fully unlocked otherwise
  doors.forEach(door => {
    const specialLock = SPECIAL_DOOR_LOCKS.find(({ key }) => door[key]);
    if (specialLock) {
      restrictedAccess.push({ door: door._door, locks: specialLock.locks });
    }
  });

  // Find the list of doors Soma can't access from the entry door without any progression
  let lockedDoors = [];
  if (restrictedAccess.length > 0) {
    // Look for doors that have locks and filter for only those we don't have keys for yet
    lockedDoors = restrictedAccess
      .filter((door) => !canAccess(door.locks, access))
      .map(door => ({ ...doors.find(d => d._door === door.door), locks: door.locks }));
  }

  // Available exits are the ones that aren't in the locked doors list
  const availableExits = doors.filter(door => !lockedDoors.find(d => door._door === d._door));

  return {
    available: availableExits,
    locked: lockedDoors,
  };
}

/**
 * Gets a list of every item Soma can currently access from this door
 * @param  {ROOM} room - The room object Soma is currently in
 * @param  {DWORD} entryDoorAddress - 8 bytes. The address of the door Soma came through
 * @param  {Locks[]} access - A list of the locks Soma can currently open, derived from determineAccess
 * @return {Object} - An object containing two lists describing the status of each item
 *   {ITEM[]} Object.available - The available item in this room
 *   {ITEM[]} Object.locked - The item currently not available, updated to have information about what locks it
 */
function getAvailableItems(room, entryDoorAddress, access) {
  const doors = room.doors;
  const items = room.items;

  // Find the door Soma came through
  const entryDoor = doors.find(door => door.address === entryDoorAddress);

  // If we can't find the entry door's entry, return an empty list.
  if (!entryDoor) {
    // TODO: maybe add a debug message here?
    return [];
  };


  // Find the list of items Soma can't access from the entry door without any progression
  let lockedItems = [];
  if (entryDoor.access && entryDoor.access.items) {
    // Look for items that have locks and filter for only those we don't have keys for yet
    lockedItems = entryDoor.access.items
      .filter(item => !canAccess(item.locks, access))
      .map(item => ({ ...items.find(i => i._item === item.item), locks: item.locks }));
  }

  // Available items are the ones that aren't in the locked items list
  const availableItems = items.filter(item => !lockedItems.find(i => item._item === i._item));

  return {
    available: availableItems,
    locked: lockedItems,
  };
}


/** Hardcoded starting room address. */
const STARTING_ROOM_ADDRESS = 0x0850EF9C;

/** This is the room where the Chaos boss fight starts. */
const ENDING_ROOM_ADDRESS = 0x0852253C;

/** Vanilla progression item mapping. */
const DEFAULT_PROGRESSION = getFreshProgressionDrops();

/**
 * Helper function that determines if it's possible to go from a given starting room
 * to a given destination based on the progression drops found along the way and an optional starting inventory
 * @param  {Areas} areas - The list of Areas, optionally modified with different entities and door destinations
 * @param  {Object} [progression=ProgressionDrops] - Mapping from keys to the drops that activate those keys
 * @param  {Keys[]} [startingInventory=[]] - A list of Keys to start with.
 *   Most notably used with a full inventory to see if a map randomization is reasonable.
 * @param  {uint_32} [startRoom=0x0850EF9C] - The room to start from, defaulting to the normal AoS starting room
 * @param  {uint_32} [endRoom=0x0852253C] - The room to end at, defaulting to the first room of the Chaos boss fight
 * @param  {Boolean} [fullSearch=false] - If the search should go through every room, or just find the end
 * @return {Object} - An object containing information about solvability and various key locations.
 *   {Boolean} Object.isSolvable - If the current room configuration provides a path from the start room to the end
 *   {Object[]} Object.solution - A list of the intended order of obtaining progression items and in what rooms. TODO, gotta figure out how I wanna do it nicely
 *   {uint_32} Object.preChronomageRoom - The address of the room leading into the Chronomage hall
 */
function isSolvable(
  areas,
  progression = DEFAULT_PROGRESSION,
  startingInventory = [],
  startRoom = STARTING_ROOM_ADDRESS,
  endRoom = ENDING_ROOM_ADDRESS,
  fullSearch = false,
) {
  // Some preliminary setup. Get a list of all the rooms and subsequently all the door
  const rooms = areas.map(a => a.rooms);
  const flattenedRooms = [].concat(...rooms);
  const allDoors = [].concat(...flattenedRooms.map(r => r.doors));
  const solution = [];
  let preChronomageRoom = null;
  let isSolvable = false;

  // Get a starting room and starting door to start the search with.
    // TODO: consider a fake entry door here too?
  const firstRoom = flattenedRooms.find(({ address }) => address === startRoom);
  if (!firstRoom) {
    throw "Error: invalid starting room";
  }
  const firstDoor = firstRoom.doors[0];
  if (!firstDoor) {
    throw "Error: starting room has no doors???????"
  }
  const visitQueue = [{ room: firstRoom, door: firstDoor }];

  // Keep track of doors/items that have already been visited/picked up.
  // Anything not immediately accessible from this door will be recorded and will
  // be "accessed" once the appropriate Keys are picked up
  const visitedDoors = new Set();
  const heldItems = new Set();

    // Keep track of the current "inventory" that will get updated as various drops are "found"
  const heldKeys = new Set(startingInventory);

  // Keep track of inaccessible doors/items.
  // Upon finding a progression item, rescan these lists to see if anything new gets unlocked
  let lockedDoors = [];
  let lockedItems = [];

  // Access level won't change too frequently, so we can limit updates to only when
  // progression items are picked up.
  let curAccess = determineAccess([...heldKeys]);

  // DFS
  while (visitQueue.length > 0) {
    const curRoomInfo = visitQueue.shift();
    const curRoom = curRoomInfo.room;
    const curDoor = curRoomInfo.door;

    if (curRoom.address === endRoom) {
      isSolvable = true;

      // If the current room is the destination, then there's a path from the start to the end
      if (!fullSearch) {
        return {
          isSolvable: true,
        };
      }
    }

    // Skip doors we've already gone through
    if (!visitedDoors.has(curDoor.address)) {
      // Find the doors and items that are currently accessible from this starting door
      const roomDoors = getAvailableExits(curRoom, curDoor.address, curAccess);
      const roomItems = getAvailableItems(curRoom, curDoor.address, curAccess);
      const nextDoors = roomDoors.available;
      const availableItems = roomItems.available.filter(item => !heldItems.has(item.address));

      // Record all the doors and items that weren't accessible
      const roomLockedDoors = roomDoors.locked;
      const roomLockedItems = roomItems.locked.filter(item => !heldItems.has(item.address));

      lockedDoors.push(...roomLockedDoors);
      lockedItems.push(...roomLockedItems);

      // Remove any entries that are now accessible from this door
      // Most obvious example is an item like Laevatain, which is inaccessible from 3 entrances
      // but immediately obtainable from a 4th entrance.
      lockedDoors = lockedDoors.filter(door => !nextDoors.find(d => d.address === door.address));
      lockedItems = lockedItems.filter(item => !availableItems.find(i => i.address === item.address));

      // Find out if these new items provide any progression
      let newItems = availableItems;
      while (newItems.length > 0) {
        // "Pick up" each accessible item
        newItems.forEach(item => heldItems.add(item.address));

        // Check every new item to see if any of them match any progression
        // and get the associated Keys if they do
        const newKeys = Object.keys(progression).filter(key =>
          availableItems.some(item => item.subtype === progression[key].subtype && item.varB === progression[key].id))

        // TODO: also check rooms for access
        // room access includes: access to graham, access to hammer, access to shop
        newItems = [];
        if (newKeys.length > 0) {
          // If new keys were gotten, find what we unlock
          newKeys.forEach(key => heldKeys.add(key));
          curAccess = determineAccess([...heldKeys]);

          // Extract any newly accessible doors/items.
          // This is done in one pass by using a filter and taking note of every filtered out entry
          lockedDoors = lockedDoors.filter(door => {
            if (canAccess(door.locks, curAccess)) {
              // Effectively pretend that the newly unlocked door is in this room
              // and let the later logic deal with enqueueing more doors.
              nextDoors.push(door);
              return false;
            }
            return true;
          });
          lcokedItems = lockedItems.filter(item => {
            if (canAccess(item.locks, curAccess)) {
              if (!heldItems.has(item.address)) {
                newItems.push(item);
              }
              return false;
            }
            return true;
          })
        }
      }

      // For all the doors that can be accessed from this door,
      // find all the doors that we haven't gone through or come out from.
      // For all these doors, find the destination room and the complementary door,
      // and add these to the queue.
      nextDoors
        .filter(door => !visitedDoors.has(door.address) && !visitedDoors.has(door.complement))
        .forEach(door => {
          const destRoom = flattenedRooms.find(room => room.address === door.destination);
          if (!destRoom) {
            Logger.log(`Couldn't find destination room from door ${JSON.stringify(door)}`, DebugLevels.WARN);
          }
          const destDoor = destRoom.doors.find(d => d.address === door.complement);
          if (destRoom && destDoor) {
            visitQueue.push({ room: destRoom, door: destDoor });
            if (destRoom.address === 0x08515C30 && !preChronomageRoom) {
              // If the destination is the Chronomage room, take note of it.
              // Make sure we only use the first time we find it, because the second one
              // is probably looking at going back.
              Logger.log(`Pre-Chronomage here: ${curRoom.address.toString(16)}`, DebugLevels.MARKER);
              preChronomageRoom = curRoom;
            }
          }
        });
      visitedDoors.add(curDoor.address);
    }
  }

  // If we're out of visitable rooms, then we couldn't reach the destination.
  return {
    isSolvable,
    solution,
    preChronomageRoom,
  };
}

const SolvabilityUtils = {
  canAccess,
  getAvailableExits,
  getAvailableItems,
  isSolvable,
};

module.exports = SolvabilityUtils;
