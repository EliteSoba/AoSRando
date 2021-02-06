# Items
This folder contains information about every drop that can be placed. Every drop at the very least has a subtype and an id, which can be written to the Entity list of a room to cause that drop to spawn there. Further, items have itemIds, which is the value that enemy data looks at (or rather itemId + 1) to determine what they drop. Items also all have names and most have descriptions. Most non-soul drops also have prices, which determines how much they'd sell for in Hammer's shop and is slightly indicative of their relative strength.

## Consumables
A list of all "Consumable" items, although some can't actually be used. Divided into 5 subgroups of HP, MP, Status, Damage, and Unusable. All of these items are subtype 2.

### HP
These items recover HP.

### MP
These items recover MP.

### Status
These items recover status effects (Poison/Curse).

### Damage
These items reduce HP unless Flesh Golem soul is equipped.

### Unusable
These items can't be used. Contains castle maps and the 3 required soul hint books. Also contains the Skull Key, which didn't end up in the final game and should not be used.

## Equipment
A list of all equipment available. Divided into 3 subgroups of Weapons, Armor, and Accessories. Weapons are subtype 3 while Armor and Accessories are both subtype 4.

### Weapons
The weapons Soma can equip.

### Armor
The armor Soma can equip.

### Accessories
The accessories Soma can equip.

## Money
Just money. Not really an item, but can exist as a standalone Entity. These don't have descriptions because the name felt sufficient. Subtype 1 with values ranging from $1 to $2,000.

## Souls
Contains lists of all Bullet (Red), Guardian (Blue), Enchanted (Yellow), and Ability (Grey) souls. These are of subtypes 5, 6, 7, and 8 respectively. The non-ability souls also list the bestiary description of the associated enemy.

### Red
The list of Bullet souls. Only noteworthy entry is Chronomage, which allows Soma to get past the Chronomage room without the Galamoth soul.

### Blue
The list of Guardian souls. Flying Armor, Giant Bat, and Black Panther are particularly noted as being progression abilities and had to have special descriptions prepared. Devil, Manticore, and Curly are also slightly noteworthy due to being rush souls.

### Yellow
The list of Enchanted souls. Similar to the Guardian souls, Undine and Skula were tagged as progression abilities and given special descriptions.

### Ability
The list of Ability souls. Only Kicker Skeleton has a description here, due to being an enemy drop, but none of these souls can be required as the Dracula souls anyway.
