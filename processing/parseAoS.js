const fs = require('fs');
const FileUtils = require('../utils/FileUtils');
const AoSConstants = require('../utils/AoSConstants');
const AoSParsingUtils = require('./AoSParsingUtils');

const {
  readData,
  readRAM,
  writeData,
} = FileUtils;

const {
  DIR,
  Zones,
  ENEMY_DNA,
  ENEMY_NAMES,
} = AoSConstants;

const {
  parseRoom,
  parseZone,
  parseEnemy,
} = AoSParsingUtils;


function updateDestination(data, address, door) {
  const correctedAddress = address - 0x08000000;
  writeData(data, correctedAddress, 4, door.destination);
  // these 2 lines are optional?
  writeData(data, correctedAddress + 6, 2, door.destXOffset);
  writeData(data, correctedAddress + 8, 2, door.destYOffset);
  writeData(data, correctedAddress + 10, 2, door.destXPos);
  writeData(data, correctedAddress + 12, 2, door.destYPos);
}

// I'm too lazy to get a proper random number generator
// so I'm just doing this for now lmao. ez seeding.
let randomNumber = 165152;
function getRandomNumber() {
  randomNumber += 208447;
  randomNumber %= 1000000;
  return randomNumber / 1000000;
}

// stealing from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// because too lazy to implement my own shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(getRandomNumber() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function changeDoorDestination(data, rooms, oldDoor, newDoor, isDecoupled) {
  // updateDestination(data, oldDoor.address, newDoor);

  if (!isDecoupled) {
  // TODO: This isn't guaranteed to work. Some rooms have two doors leading to the same destination
    const oldDestination = rooms.find(room => room.address === oldDoor.destination);
    if (!oldDestination) {
      return;
    }
    const oldComplement = oldDestination.doors.find(door => door.destination === oldDoor.sourceRoom);
    if (!oldComplement) {
      return;
    }
    const newDestination = rooms.find(room => room.address === newDoor.destination);
    if (!newDestination) {
      return;
    }
    const newComplement = newDestination.doors.find(door => door.destination === newDoor.sourceRoom);
    if (!newComplement) {
      return;
    }
    // Doing this here ensures exits stay coupled. This just means area transitions should stay the same
    updateDestination(data, oldDoor.address, newDoor);
    updateDestination(data, newComplement.address, oldComplement);
  }
}

function writeCutsceneSkip(data) {
  writeData(data, 0x05B56C, 2, 0x2003);
}

/**
 * Replaces candles and Lucky Charm with Gravekeeper, Giant Bat, Skula, and Chaos Ring
 */
function writeDebugDrops(data) {
  writeData(data, 0x5109AC, 1, 0x02);
  writeData(data, 0x5109B2, 1, 0x05);
  writeData(data, 0x5109B8, 1, 0x00);
  writeData(data, 0x5109BE, 1, 0x04);
  writeData(data, 0x5109C4, 1, 0x01);
  writeData(data, 0x5109CA, 1, 0x06);
  writeData(data, 0x5109D8, 4, 0x02BF0078);
  writeData(data, 0x5109DC, 4, 0x01200208);
  writeData(data, 0x5109E0, 3, 0x3A0003);
  writeData(data, 0x5109E4, 4, 0x02C000E0);
  writeData(data, 0x5109E8, 3, 0x080407);
  writeData(data, 0x5109EC, 3, 0x010001);
  writeData(data, 0x5109F0, 4, 0x02C0006A);
  writeData(data, 0x5109F4, 4, 0x0120020B);
  writeData(data, 0x5109F8, 1, 0x1C);
  writeData(data, 0x5109FC, 4, 0x02C000F0);
  writeData(data, 0x510A00, 3, 0x060405);
  writeData(data, 0x510A04, 3, 0x020008);
  writeData(data, 0x510A08, 3, 0xC0008A);
  writeData(data, 0x510A0C, 1, 0x09);
  writeData(data, 0x510A10, 3, 0x00001B);
  writeData(data, 0x510A14, 2, 0x0115);
  writeData(data, 0x510A18, 1, 0x09);
  writeData(data, 0x510A1C, 1, 0x1A);
  writeData(data, 0x510A20, 2, 0x00D0);
  writeData(data, 0x510A24, 4, 0x00070406);
  writeData(data, 0x510A28, 3, 0x020007);
  writeData(data, 0x510A2C, 1, 0xC0);
  writeData(data, 0x510A30, 4, 0x00040404);
  writeData(data, 0x510A34, 3, 0x2C004C);
}

let freeSpaceStart = 0x00651170;

/**
 * Relocate all door entries to the bottom of the file, which ensures that zips will fall through
 * to the safety zips without getting caught by intermediate data.
 */
function relocateDoorLists(data, rooms) {
  const writeDoor = (address, door) => {
    writeData(data, address, 4, door.destination);
    writeData(data, address + 4, 1, door.xPos);
    writeData(data, address + 5, 1, door.yPos);
    writeData(data, address + 6, 2, door.destXOffset);
    writeData(data, address + 8, 2, door.destYOffset);
    writeData(data, address + 10, 2, door.destXPos);
    writeData(data, address + 12, 2, door.destYPos);
  }

  rooms.forEach((room) => {
    const doorListAddress = room.address + 24 - 0x08000000;
    const alignment = room.address % 16;

    writeData(data, doorListAddress, 4, freeSpaceStart + alignment + 0x08000000);
    // Modify data
    room.doorList = freeSpaceStart + alignment + 0x08000000;

    room.doors.forEach((door) => {
      writeDoor(freeSpaceStart + alignment, door);
    // Modify data
      door.address = freeSpaceStart + alignment + 0x08000000;
      freeSpaceStart += 16;
    });
    // Safety padding
    freeSpaceStart += 16;
  });
}

/**
 * Write a bunch of fake doors at the end-of-file. Gernerally not guaranteed because some intermediate data
 * can end up with "reasonable" door exit coordinates but an invalid room. Combine with relocateDoorLists
 * to ensure these safety zips get used.
 */
function writeSafetyZips(data) {
  const writeDoor = (address, xPos, yPos) => {
    writeData(data, address, 4, 0x0850EF9C);
    writeData(data, address + 4, 1, xPos);
    writeData(data, address + 5, 1, yPos);
    writeData(data, address + 10, 2, 0x0110);
    writeData(data, address + 12, 2, 0x0200);
  }

  let startAddress = 0x00669420;
  for (let offset = 0; offset <= 0xC; offset += 4) {
    for (let x = -1; x <= 10; x++) {
      const curX = x === -1 ? 0xFF : x;
      for (let y = -1; y <= 10; y++, startAddress += 0x10) {
        const curY = y === -1 ? 0xFF : y;
        writeDoor(startAddress + offset, curX, curY);
      }
    }
  }
}

function main() {
  fs.readFile('..\\aos.gba', (err, data) => {
    if (err) {
      console.log(err);
      throw 1;
    }
    const content = [];
    let allDoors = [];
    /*Zones*/[].forEach((zone) => {
      const zoneData = parseZone(data, zone);
      const rooms = zoneData.rooms.map((room, i) => {
        const roomData = {
          _area: zone._area,
          _room: i,
          ...parseRoom(data, room)
        };
        return roomData;
      });
      // content.push({area: zone._name, rooms: rooms});
      // relocateDoorLists(data, rooms);

      const doors = [].concat(...rooms.map(room => room.doors));
      allDoors = allDoors.concat(doors);
      // look at all doors going right, excluding zone transition doors
      // const rightDoors = doors
      // .filter(({ direction }) => direction === DIR.RIGHT)
      // .filter(({ destination }) => rooms.find(({ address }) => address === destination));
      //
      // shuffle(rightDoors);
      //
      // rightDoors.forEach((door, i) => {
      //   let next = i + 1;
      //   if (next === rightDoors.length) {
      //     next = 0;
      //   }
      //   changeDoorDestination(data, rooms, door, rightDoors[next], false);
      // });
      //
      // const downDoors = doors.filter(({ direction }) => direction === DIR.DOWN);
      //
      // shuffle(downDoors);
      //
      // downDoors.forEach((door, i) => {
      //   let next = i + 1;
      //   if (next === downDoors.length) {
      //     next = 0;
      //   }
      //   changeDoorDestination(data, rooms, door, downDoors[next], false);
      // });
    });

    for (let i = ENEMY_DNA.first; i <= ENEMY_DNA.last; i += 36) {
      const id = (i - ENEMY_DNA.first) / 36;
      content.push({id, name: ENEMY_NAMES[id], ...parseEnemy(data, i)});
    }

    // console.log(222222);
    // allDoors.forEach((door, i) => door.i = i);
    // Zones.forEach((zone) => {
    //   const zoneData = parseZone(data, zone);
    //   const rooms = zoneData.rooms.map((room, i) => {
    //     const roomData = {
    //       _area: zone._area,
    //       _room: i,
    //       ...parseRoom(data, room, allDoors)
    //     };
    //     return roomData;
    //   });
    //   content.push({area: zone._name, rooms: rooms});
    // });

    /*
    const corridor = parseArea(data, CORRIDOR);
    const rooms = corridor.rooms.map(room => parseRoom(data, room));
    const doors = [].concat(...rooms.map(room => room.doors));
    const rightDoors = doors.filter(({ direction }) => direction === DIR.RIGHT);

    shuffle(rightDoors);

    rightDoors.forEach((door, i) => {
      let next = i + 1;
      if (next === rightDoors.length) {
        next = 0;
      }
      changeDoorDestination(data, rooms, door, rightDoors[next], false);
    });

    const downDoors = doors.filter(({ direction }) => direction === DIR.DOWN);

    shuffle(downDoors);

    downDoors.forEach((door, i) => {
      let next = i + 1;
      if (next === downDoors.length) {
        next = 0;
      }
      changeDoorDestination(data, rooms, door, downDoors[next], false);
    });
    */

    writeCutsceneSkip(data);
    writeDebugDrops(data);
    writeSafetyZips(data);
    fs.writeFile('enemies.json', JSON.stringify(content), err => {console.log(err);});
    //fs.writeFile('aos2.gba', data, err => {console.log(err);});
  });
}

main();
