const RandomizerEngine = require('../engine/RandomizerEngine');

const Logger = require('../debug/Logger');
const DebugLevels = require('../debug/DebugLevels');

const fs = require('fs');
const readline = require('readline');

/**
 * Simple CLI implementation to interface with the randomizer engine
 */
class RandomizerCommandLineInterface {
  constructor() {
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this._config = {};
    this._randomizerEngine = new RandomizerEngine();
    this._curStep;
    this._data = null;
    this._filename = '';

    this._rl.on('close', () => process.exit(0));

    this._abort = this._abort.bind(this);
    this._start = this._start.bind(this);
    this._promptFilename = this._promptFilename.bind(this);
    this._promptSeed = this._promptSeed.bind(this);
    this._promptEntranceRandomizerChoice = this._promptEntranceRandomizerChoice.bind(this);
    this._promptItemRandomizerChoice = this._promptItemRandomizerChoice.bind(this);
    this._promptHundoability = this._promptHundoability.bind(this);
    this._randomize = this._randomize.bind(this);
    this._promptFinalFilename = this._promptFinalFilename.bind(this);
    this._writeFile = this._writeFile.bind(this);
    this._end = this._end.bind(this);
  }

  /** If any step fails, abort the process and exit */
  _abort() {
    this._rl.close();
  }

  /** Start by showing the randomizer version */
  _start() {
    return new Promise((fulfill, reject) => {
      console.log(`Randomizing using Randomizer version ${this._randomizerEngine.getVersion()}`);
      fulfill();
    })
  }

  /** Request the AoS game file location */
  _promptFilename() {
    return new Promise((fulfill, reject) => {
      this._rl.question('\nEnter path to Aria of Sorrow game file: ', (filename) => {
        this._config.originalFilename = filename.split('/').pop();
        fs.readFile(filename, (error, data) => {
          if (error) {
            Logger.log('Error reading file:', DebugLevels.FATAL);
            Logger.log(error, DebugLevels.FATAL);
            reject();
          }
          else {
            Logger.log(`Successfully read file ${filename}`, DebugLevels.MARKER);
            this._data = data;
            fulfill();
          }
        });
      });
    });
  }

  /** Request an optional seed */
  _promptSeed() {
    return new Promise((fulfill, reject) => {
      this._rl.question('\nEnter a seed (leave blank for random seed): ', (seed) => {
        if (seed !== '') {
          this._config.seed = seed;
        }
        fulfill();
      })
    })
  }

  /** Request an optional entrance rando implementation */
  _promptEntranceRandomizerChoice() {
    return new Promise((fulfill, reject) => {
      console.log('\n\nChoose an entrance randomizer implementation, or leave blank for no entrance randomization:');
      this._randomizerEngine.getEntranceRandomizerImplementationChoices()
        .filter(choice => choice.id !== 0)
        .forEach((choice) => {
          console.log(`${choice.id}:\t${choice.name}`);
          console.log(`  ${choice.desc}`);
        });
      this._rl.question('\nEnter a number: ', (choice) => {
        if (choice === '') {
          Logger.log('No entrance randomization.', Logger.MARKER);
          this._config.randomizeDoors = false;
          fulfill();
        }
        else {
          const resolvedChoice = parseInt(choice);
          if (isNaN(resolvedChoice)) {
            console.log('Invalid input');
            reject();
          }
          else {
            this._config.randomizeDoors = true;
            this._config.entranceRandomizerChoice = resolvedChoice;
            fulfill();
          }
        }
      });
    });
  }

  /** Request an optional item rando implementation */
  _promptItemRandomizerChoice() {
    return new Promise((fulfill, reject) => {
      console.log('\n\nChoose an item randomizer implementation, or leave blank for no item randomization:');
      this._randomizerEngine.getItemRandomizerImplementationChoices()
        .filter(choice => choice.id !== 0)
        .forEach((choice) => {
          console.log(`${choice.id}:\t${choice.name}`);
          console.log(`  ${choice.desc}`);
        });
      this._rl.question('\nEnter a number: ', (choice) => {
        if (choice === '') {
          Logger.log('No item randomization.', Logger.MARKER);
          this._config.randomizeItems = false;
          fulfill();
        }
        else {
          const resolvedChoice = parseInt(choice);
          if (isNaN(resolvedChoice)) {
            console.log('Invalid input');
            reject();
          }
          else {
            this._config.randomizeItems = true;
            this._config.itemRandomizerChoice = resolvedChoice;
            fulfill();
          }
        }
      });
    });
  }

  /** Should this seed allow 100% map completion? */
  _promptHundoability() {
    return new Promise((fulfill, reject) => {
      this._rl.question('\nShould the resulting map be 100%able? (y/n): ', (choice) => {
        const resolvedChoice = (`${choice}y`).toLowerCase().substring(0, 1);
        if (resolvedChoice === 'n') {
          this._config.ensureFullyClearable = false;
        }
        else {
          this._config.ensureFullyClearable = true;
        }
        fulfill();
      });
    })
  }

  /** Execute the randomization */
  _randomize() {
    return new Promise((fulfill, reject) => {
      Logger.log('Beginning randomization...', DebugLevels.MARKER);
      const {
        filename,
        data: updatedData,
      } = this._randomizerEngine.execute([...this._data], this._config);
      if (updatedData) {
        Logger.log('Randomization completed', DebugLevels.MARKER);
        this._filename = filename;
        this._data = updatedData;
        fulfill();
      }
      else {
        Logger.log('Randomization failed', DebugLevels.FATAL);
        reject();
      }
    });
  }

  /** Request an output filename, defaulting to what the randomizer chose */
  _promptFinalFilename() {
    return new Promise((fulfill, reject) => {
      this._rl.question(`\nEnter final filename, excluding the '.gba' file extension (leave blank for default ${this._filename}): `, (choice) => {
        if (choice === '') {
          fulfill();
        }
        else {
          this._filename = `${choice}.gba`;
          fulfill();
        }
      });
    })
  }

  /** Perform the writing of the file */
  _writeFile() {
    return new Promise((fulfill, reject) => {
      fs.writeFile(this._filename, Buffer.from(this._data), (err) => {
        if (err) {
          Logger.log('Error writing file:', DebugLevels.FATAL);
          Logger.log(err, DebugLevels.FATAL);
          reject();
        }
        else {
          Logger.log('Successfully wrote file', DebugLevels.MARKER);
          fulfill();
        }
      })
    })
  }

  /** Simple marker to denote the end of the CLI process */
  _end() {
    return new Promise((fulfill, reject) => {
      this._rl.question('\nRandomization completed. Press enter to close...', _ => this._abort());
    });
  }

  /** Begin the CLI prompting */
  execute() {
    const promise = this._start()
      .then(this._promptFilename)
      .then(this._promptSeed)
      .then(this._promptEntranceRandomizerChoice)
      .then(this._promptItemRandomizerChoice)
      .then(this._promptHundoability)
      .then(this._randomize)
      .then(this._promptFinalFilename)
      .then(this._writeFile)
      .then(this._end)
      .catch(this._abort);
  }
}

if (typeof require !== 'undefined' && require.main === module) {
  const cli = new RandomizerCommandLineInterface();
  cli.execute();
}

module.exports = RandomizerCommandLineInterface;
