// There's a door that you can't appear to exit from in garden normally,
// so mock a door that properly goes to it
const UNMATCHED_GARDEN_DOOR = {
  "address": -4,
  "destination": 139556448,
  "destXOffset": 0,
  "destYOffset": 0,
  "destXPos": 0x201,
  "destYPos": 0,
  "complement": 139556400
};

/**
 * Helper function to actually update a door with new information
 * @param  {Door} door - The door to update
 * @param  {Door} replacement - The door to derive information from
 */
function updateDoor(door, replacement) {
  // These are the only keys that are related to the destination and need to be updated
  const keysToReplace = ['destination', 'destXOffset', 'destYOffset', 'destXPos', 'destYPos'];
  keysToReplace.forEach(key => door[key] = replacement[key]);
}

/**
 * Helper function to actually perform the new door reconnections generated by
 * an entrance shuffler. This logic should be universal across all entrance shuffle logics.
 * @param  {Areas} areas - The list of areas to update
 * @param  {Object[]} connections - A list of objects describing source doors and their respective new destinations
 */
function updateAreasWithNewConnections(areas, connections) {
  // Keep original door data to properly reference past door complement info.
  const deepCopiesOfDoors = {};
  deepCopiesOfDoors[-4] = {...UNMATCHED_GARDEN_DOOR};

  // Don't ask. Apparently the connections aren't fully shallow copies, but I don't remember why
  const allDoors = {};
  areas.forEach((area) => {
    area.rooms.forEach((room) => {
      room.doors.forEach((door) => {
        deepCopiesOfDoors[door.address] = {...door};
        allDoors[door.address] = door;
      });
    });
  });

  connections.forEach(({ source, destination }) => {
    const actualSource = allDoors[source.address];
    const actualDestination = allDoors[destination.address];

    // TODO: destXOffset/destYOffset (or maybe destX/YPos?) shouldn't be blindly copied
    // because they're very connector-specific.

    // The source door should be updated to end up at the new destination
    // This is done by replacing the source door's info with that of the door
    // that previously led to the destination door.
    // We reference the unmodified copy to ensure we get the correct complement
    const addressOfDoorThatLedToDestination = deepCopiesOfDoors[actualDestination.address].complement;
    const dataOfDoorThatLedToDestination = deepCopiesOfDoors[addressOfDoorThatLedToDestination];

    // Update the source door's destination info with the previous complement's destination info
    updateDoor(actualSource, dataOfDoorThatLedToDestination);

    // Since this source now leads to this destination, we can manually update the complement
    if (actualDestination.complementUpdated) {
      // I HATE THIS SO MUCH BUT CHANGING THIS WILL REQUIRE SO MUCH REFACTORING
      // I HATE THAT GARDEN HAS SUCH MESSED UP DOORS
      // I NEED TO TURN COMPLEMENTS INTO A LIST AND THEN EVERY TIME I REFERENCE COMPLEMENT
      // I NEED TO SCAN THROUGH A LIST *JUST* FOR THE ONE DOOR IN GARDEN THAT HAS 2 ENTRANCES
      actualDestination.complement2 = actualSource.address;
    }
    else {
      actualDestination.complement = actualSource.address;
      actualDestination.complementUpdated = true;
    }
  });
}

module.exports = updateAreasWithNewConnections;