# Postprocessing
This folder contains a lot of files that handle additional changes to the game data that can't be handled with just the Areas info alone. This changes range from enhancements such as allowing cutscene skips on fresh files, to doing more advanced data writing like changing the destination that Chronomage sends a Galamothless Soma. Because some of these enhancements could overwrite the changes from others, all these are bundled together and handled by the PostProcessor.

## PostProcessor
A controller class that allows a caller to specify which transformations to apply before applying them all in bulk. The main value of this is maintaining a pointer to where free space starts, so certain enhancements don't get overwritten by others.

## relocateBossDoors
When rooms are shuffled, doors that lead into boss rooms don't necessarily have the boss doors leading in to indicate that a boss is coming up. This adds boss doors where necessary and removes the boss doors that no longer lead to boss rooms.

## removeBreakableWalls
When rooms are shuffled, sometimes progression will take Soma "backwards" through a breakable wall. This experience is slightly offputting, so this simply removes all breakable wall entities.

## updateAncientBooks
This updates the Ancient Book text to describe the newly chosen Dracula souls. For now it just lists the enemy name, but can easily be changed to list the beastiary description, or some other text.

## updateDraculaSouls
This updates the hardcoded Dracula Soul indices that the game checks.

## writeChronomageDestination
This updates the hardcoded location that Chronomage sends Soma to a given address. The value provided is generally the room directly before the Chronomage room in logic.

## writeCutsceneSkip
This updates some code that checks if the player is allowed to skip cutscenes to always be true.

## writeStartingRoom
This updates the room Soma starts in to a given address of a room in Castle Corridor. Due to how the "Magical Ticket" Codebreaker codes work, this only works for Castle Corridor by changing the room indices to make the starting room "Room 0" instead.
