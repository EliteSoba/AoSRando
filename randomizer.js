const RandomizerEngine = require('./engine/RandomizerEngine');

const Logger = require('./debug/Logger');
const DebugLevels = require('./debug/DebugLevels');

const fs = require('fs');

function main() {
  fs.readFile('.\\aos.gba', (error, data) => {
    if (error) {
      Logger.log('Error reading file:', DebugLevels.ERROR);
      Logger.log(error, DebugLevels.ERROR);
      return;
    }

    const randomizerEngine = new RandomizerEngine();

    // Note: seed 2 provides an unsolvable seed by making no sphere 0 items accessible
    // I'll leave this here for now to worry about how to handle it in logic later.
    const config = {
      seed: 3,
      randomizeDoors: true,
      randomizeItems: true,
      ensureFullyClearable: true,
      entranceRandomizerChoice: 1,
      itemRandomizerChoice: 1,
      originalFilename: 'aos.gba',
    };
    const {
      filename,
      data: updatedData,
    } = randomizerEngine.execute([...data], config);


    fs.writeFile(filename, Buffer.from(updatedData), err => {
      if (err) {
        Logger.log('Error writing file:', DebugLevels.ERROR);
        Logger.log(err, DebugLevels.ERROR);
      }
      else {
        Logger.log('Successfully wrote file', DebugLevels.MARKER);
      }
    });
  });
}

main();
