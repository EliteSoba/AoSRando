const RandomizerCommandLineInterface = require('./cli/RandomizerCommandLineInterface');

/**
 * For now this file simply wraps the CLI but will eventually later be better about
 * handling command line arguments and maybe being the interface for the GUI.
 */
function main() {
  const cli = new RandomizerCommandLineInterface();
  cli.execute();
}

if (typeof require !== 'undefined' && require.main === module) {
  main();
}
