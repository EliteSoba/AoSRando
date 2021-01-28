/** HP Recovery Items */
const HP = [
  {
    id: 0,
    itemId: 0,
    subtype: 2,
    name: "Potion",
    description: "Restores 100 HP.",
    cost: 0xC8
  },
  {
    id: 1,
    itemId: 1,
    subtype: 2,
    name: "High Potion",
    description: "Restores 400 HP.",
    cost: 0x3E8
  },
  {
    id: 2,
    itemId: 2,
    subtype: 2,
    name: "Super Potion",
    description: "Restores ALL HP.",
    cost: 0x1388
  },
  {
    id: 3,
    itemId: 3,
    subtype: 2,
    name: "Meat Strip",
    description: "Restores 29 HP.",
    cost: 0x122
  },
  {
    id: 4,
    itemId: 4,
    subtype: 2,
    name: "Tasty Meat",
    description: "Restores 290 HP.",
    cost: 0x190
  },
  {
    id: 10,
    itemId: 10,
    subtype: 2,
    name: "Potato Pancake",
    description: "The burnt edges are the best part.",
    cost: 0x3E8
  },
  {
    id: 11,
    itemId: 11,
    subtype: 2,
    name: "Beef Curry",
    description: "Quite an addictive flavor.",
    cost: 0x4B0
  },
  {
    id: 12,
    itemId: 12,
    subtype: 2,
    name: "Ramen",
    description: "Noodles floating in a broth made from pork bones.",
    cost: 0x320
  },
  {
    id: 13,
    itemId: 13,
    subtype: 2,
    name: "Cream Soda",
    description: "Has a cherry on top.",
    cost: 0x190
  },
  {
    id: 14,
    itemId: 14,
    subtype: 2,
    name: "Cream Puff",
    description: "Soft, fluffy, and sweet.",
    cost: 0x78
  },
  {
    id: 15,
    itemId: 15,
    subtype: 2,
    name: "Milk",
    description: "Low-fat milk.",
    cost: 0x50
  },
  {
    id: 16,
    itemId: 16,
    subtype: 2,
    name: "Coffee",
    description: "Decaffeinated coffee.",
    cost: 0xE6
  },
  {
    id: 17,
    itemId: 17,
    subtype: 2,
    name: "Tea",
    description: "Sip it slowly and relax.",
    cost: 0xC8
  },
  {
    id: 18,
    itemId: 18,
    subtype: 2,
    name: "Pudding",
    description: "It wiggles and jiggles.",
    cost: 0x96
  },
  {
    id: 19,
    itemId: 19,
    subtype: 2,
    name: "Strawberry",
    description: "A plump, sweet strawberry.",
    cost: 0x212
  },
  {
    id: 20,
    itemId: 20,
    subtype: 2,
    name: "Melon",
    description: "A melon of the finest quality.",
    cost: 0x5DC
  },
  {
    id: 21,
    itemId: 21,
    subtype: 2,
    name: "Grapes",
    description: "Fresh and juicy.",
    cost: 0x17C
  },
  {
    id: 22,
    itemId: 22,
    subtype: 2,
    name: "Persimmon",
    description: "A bitter fruit.",
    cost: 0x64
  }
];

/** MP Recovery Items */
const MP = [
  {
    id: 5,
    itemId: 5,
    subtype: 2,
    name: "Mind Up",
    description: "Restores 20% of your MP.",
    cost: 0x96
  },
  {
    id: 6,
    itemId: 6,
    subtype: 2,
    name: "High Mind Up",
    description: "Restores 50% of your MP.",
    cost: 0x320
  },
  {
    id: 7,
    itemId: 7,
    subtype: 2,
    name: "Mana Prism",
    description: "Restores ALL of your MP.",
    cost: 0xBB8
  }
];

/** Status Curing Items */
const Status = [
  {
    id: 8,
    itemId: 8,
    subtype: 2,
    name: "Anti-Venom",
    description: "Counteracts the effects of poison.",
    cost: 0x64
  },
  {
    id: 9,
    itemId: 9,
    subtype: 2,
    name: "Uncure Potion",
    description: "Nullifies the effects of curses.",
    cost: 0x64
  }
];

/** HP Reducing Items */
const Damage = [
  {
    id: 23,
    itemId: 23,
    subtype: 2,
    name: "Rotten Meat",
    description: "A slab of rotting beef.",
    cost: 0x0
  },
  {
    id: 24,
    itemId: 24,
    subtype: 2,
    name: "Spoiled Milk",
    description: "It expired three years ago.",
    cost: 0x0
  }
];

/** Unusable Items */
const Unusable = [
  {
    id: 25,
    itemId: 25,
    subtype: 2,
    name: "Skull Key",
    description: "Opens doors marked with a skull design.",
    cost: 0x0,
    doNotUse: true
  },
  {
    id: 26,
    itemId: 26,
    subtype: 2,
    name: "Ancient Book 1",
    description: "The first spirit is a demon from hell fires.",
    cost: 0x0,
    isProgression: true
  },
  {
    id: 27,
    itemId: 27,
    subtype: 2,
    name: "Ancient Book 2",
    description: "The second spirit is the King of Bats.",
    cost: 0x0,
    isProgression: true
  },
  {
    id: 28,
    itemId: 28,
    subtype: 2,
    name: "Ancient Book 3",
    description: "The third spirit is a beautiful nightmare.",
    cost: 0x0,
    isProgression: true
  },
  {
    id: 29,
    itemId: 29,
    subtype: 2,
    name: "CASTLE MAP 1",
    description: "One portion of the castle's floor plan is written on it.",
    cost: 0x64
  },
  {
    id: 30,
    itemId: 30,
    subtype: 2,
    name: "CASTLE MAP 2",
    description: "One portion of the castle's floor plan is written on it.",
    cost: 0x64
  },
  {
    id: 31,
    itemId: 31,
    subtype: 2,
    name: "CASTLE MAP 3",
    description: "One portion of the castle's floor plan is written on it.",
    cost: 0x64
  }
];

/** Collection of every "consumable" item, grouped by type */
const Consumables = {
  HP,
  MP,
  Status,
  Damage,
  Unusable
};

module.exports = Consumables;
