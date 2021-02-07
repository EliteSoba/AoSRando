# Engine
This folder contains the logic required to connect the user interface with the randomization code.

## RandomizerEngine
Helper class that interfaces with all the randomization. It takes in the raw AoS game data and a randomization config object and returns a game file with all the randomizations applied. It's a class instead of just a function to allow for easier access to the lists of entrance/item randomization choices.

## generateFilename
Helper function to generate a new output filename based on the original file's filename, the seed, and the randomization configuration.
