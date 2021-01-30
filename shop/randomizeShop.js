const Consumables = require('../items/Consumables');
const Equipment = require('../items/Equipment');

const {
  HP,
  MP,
  Status,
  Unusable,
} = Consumables;
const {
  Weapons,
  Armor,
  Accessories,
} = Equipment;

const allRelevantItems = [
  ...HP,
  ...MP,
  ...Status,
  ...Unusable,
  ...Weapons,
  ...Armor,
  ...Accessories
];

const shopLists = [
  {
    // Personal ID
    id: 0,

    // Location where item list starts. This indicates the length
    address: 0x526C04,

    // The default number of items in this shop list
    defaultLength: 18,

    // The max possible number of items before overflowing into neighboring data
    maxLength: 23,

    // Where in the code this list gets referenced, which can be rerouted to free space for more items
    reference: 0x526C6C,
  },
  {
    id: 1,
    address: 0x526C1C,
    defaultLength: 31,
    maxLength: 35,
    reference: 0x526C70,
  },
  {
    id: 2,
    address: 0x526C40,
    defaultLength: 38,
    maxLength: 43,
    reference: 0x526C74,
  }
];

const SHOP_ITEMS_START = 0x5269FC;
const SHOP_ITEMS_END = 0x526C00;

/**
 * Util function to get all the available items the shop can show.
 * This is a hardcoded list that contains just about every item except:
 *   Skull Key, Ancient Books 1-3, Castle Map 3, and Chaos Ring
 * @param  {Byte[]} data - The game data to update
 * @return {Item[]} - The list of Items that are available, as well as their index in the list.
 */
function getShopItems(data) {
  const shopItems = [];
  for (let curAddress = SHOP_ITEMS_START; curAddress <= SHOP_ITEMS_END; curAddress += 4) {
    const curIndex = (curAddress - SHOP_ITEMS_START) / 4;
    const subtype = data[curAddress];
    const id = data[curAddress + 1];

    const item = allRelevantItems.find(item => item.subtype === subtype && item.id === id);
    if (item) {
      shopItems.push({
        ...item,
        shopIndex: curIndex,
      });
    }
  }
  return shopItems;
}

/**
 * Helper function to randomize the shop items.
 * For now just indiscriminately picks items to offer,
 * and won't guarantee any healing or breakable wall progression
 * @param  {Byte[]} data - The game data to update
 * @param  {Random} random - The seeded pseudorandom number generator
 */
function randomizeShop(data, random) {
  const availableItems = getShopItems(data);

  // Filter out the items with 0 cost. These are generally late game equips and should not be sold (especially not for free)
  const reasonableItems = availableItems.filter(item => item.price > 0);

  // Super lazy algo. Will add some item type enforcement later for overhead swing/healing item
  const indices = availableItems.map(({ shopIndex }) => shopIndex);

  const shuffledIndices = random.shuffle(indices);

  shopLists.forEach((shopList) => {
    const items = shuffledIndices.slice(0, shopList.defaultLength).sort();
    items.forEach((item, i) => {
      data[shopList.address + 1 + i] = item;
    });
  });
}

module.exports = randomizeShop;
