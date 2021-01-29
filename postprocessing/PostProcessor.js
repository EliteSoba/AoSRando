const writeCutsceneSkip = require('./writeCutsceneSkip');
const updateAncientBooks = require('./updateAncientBooks');
const updateDraculaSouls = require('./updateDraculaSouls');
const writeStartingRoom = require('./writeStartingRoom');
const writeChronomageDestination = require('./writeChronomageDestination');
const removeBreakableWalls = require('./removeBreakableWalls');

/**
 * Provides additional enhancements outside of the basic randomization features.
 * This is a class to ensure that the location of free space gets refreshed with each run
 * and also ensures that certain operations run in a specific order
 */
class PostProcessor {
  constructor(data) {
    this._freeSpaceStart = 0x00651170;
    this._data = data;
    this._red;
    this._blue;
    this._yellow;

    this._addCutsceneSkip = false;

    this._relocateDoorLists = false;
    this._addSafetyZips = false;

    this._relocateStartingEntities = false;
    this._addStartingSave = false;
    this._addDebugItems = false;

    this._startingRoomIndex = null;
    this._chronomageDestination = null;
    this._removeBreakableWalls = false;
  }

  /**
   * If cutscene skips should be allowed regardless of game completion
   */
  addCutsceneSkip() {
    this._addCutsceneSkip = true;
    return this;
  }

  /**
   * If safety zips should be written in that go back to the starting room.
   * For now relocating the door lists has no value outside of this, so these two are paired.
   */
  addSafetyZips() {
    this._relocateDoorLists = true;
    this._addSafetyZips = true;
    return this;
  }

  /**
   * Adds soul candles for Gravekeeper, Giant Bat, and Skula, and adds Claimh Solais and Chaos Ring
   * to the first room to aid in debug exploration. Also requires moving the entity list.
   */
  addDebugItems() {
    this._addDebugItems = true;
    return this;
  }

  /**
   * Updates the dracula soul pointers and updates the Ancient Book descriptions accordingly
   * @param  {Soul} red - The bullet soul to use
   * @param  {Soul} blue - The guardian soul to use
   * @param  {Soul} yellow - The enchanted soul to use
   */
  updateRequiredSouls(red, blue, yellow) {
    this._red = red;
    this._blue = blue;
    this._yellow = yellow;
    return this;
  }

  /**
   * Changes the location of the game's starting room to the given room
   * @param {Room} room - The room to start at
   */
  setStartingRoom(room) {
    this._startingRoom = room;
    return this;
  }

  /**
   * Changes the location of the room where Chronomage sends you
   * @param {uint_32} destination - The address of where Chronomage sends you
   */
  setChronomageDestination(destination) {
    this._chronomageDestination = destination;
    return this;
  }

  /**
   * Zeroes out all the breakable wall entities.
   */
  removeBreakableWalls() {
    this._removeBreakableWalls = true;
    return this;
  }

  execute() {
    if (this._addCutsceneSkip) {
      writeCutsceneSkip(this._data);
    }
    if (this._relocateDoorLists) {
      // etc.
    }
    if (this._addSafetyZips) {
      // etc.
    }
    if (this._addDebugItems) {
      // relocate entities list and add debug items
      // write all the entities to free space
    }

    if (this._red && this._blue && this._yellow) {
      updateDraculaSouls(this._data, this._red, this._blue, this._yellow);
      updateAncientBooks(this._data, this._red, this._blue, this._yellow);
    }

    if (this._startingRoom) {
      writeStartingRoom(this._data, this._startingRoom);
    }

    if (this._chronomageDestination) {
      writeChronomageDestination(this._data, this._chronomageDestination);
    }

    if (this._removeBreakableWalls) {
      removeBreakableWalls(this._data);
    }

    return this._data;
  }
}

module.exports = PostProcessor;
