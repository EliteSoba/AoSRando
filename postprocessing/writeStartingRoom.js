const FileUtils = require('../utils/FileUtils');
const AoSConstants = require('../utils/AoSConstants');

const {
  writeData,
  readData,
} = FileUtils;
const CorridorInfo = AoSConstants.Zones[0];

/**
 * Helper function to update the hardcoded starting room. For now must be a Corridor room.
 * This is done in a slightly hacky way by changing the game's room indexes so that this new room
 * is set as the room at index 0 in area 0.
 * This could also be done by updating the starting room information stored at 0x084F0D8C,2
 * but the current Magical Ticket implementation requires sending back to 0,0 for now.
 * @param  {Byte[]} data - The game data to update
 * @param  {Room} room - The room to start at
 */
function writeStartingRoom(data, room) {
  if (room._area !== 0) {
    throw 'Error: Can only set the starting room as a Castle Corridor room for now';
  }
  const firstRoom = readData(data, CorridorInfo.first, 4);
  let newRoomAddress;

  for (let curAddress = CorridorInfo.first, roomId = 0; curAddress <= CorridorInfo.last; curAddress += 4, roomId++) {
    const curRoomAddress = readData(data, curAddress, 4);
    if (curRoomAddress === room.address) {
      writeData(data, curAddress, 4, firstRoom);
      writeData(data, CorridorInfo.first, 4, room.address);
      return;
    }
  }
  console.log('Couldn\'t find the room to randomize');
}

module.exports = writeStartingRoom;
