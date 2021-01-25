# Progression
This effectively lists all the constants related to the randomization logic.

## Areas
A list containing information about every room in every relevant area. Along with miscellaneous metadata about each room, also lists information about each exit from the room and every item placed in the room. Most importantly, lists the various ways access to each exit/item is blocked when entering the room from a given entrance.  
In actuality, this file returns a getter function, so that the resulting room information can be modified without restraint and a fresh copy can be produced at any time.

## Locks
These are the various ways that progression can be blocked. Rather than listing specific drops, this file lists more general concepts, such as "Flight," as progression-blockers. This simplifies the process of locking certain items behind certain combinations (logical AND) of drops, or letting multiple different drops provide access (logical OR).

## Keys
These are more closely related to the actual in-game drops for progression. One Key can unlock many Locks and some Locks can require many Keys simultaneously.

## Reqs
This lists the mapping of Locks to Keys, describing which Keys or Key combinations unlock which Locks.

## ProgressionDrops
This file creates the association between the various progression Keys and relevant drops (see items/).

## determineAccess
A helper function that, when given a list of Keys, determines all the Locks that set of Keys can progress through.
