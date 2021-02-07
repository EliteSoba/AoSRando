/**
 * Helper function to actually record the new item placements generated by
 * an item randomizer. This logic should be universal across all item randomization logics.
 * @param  {Areas} areas - The list of areas to update
 * @param  {Object} itemMapping - A mapping of item addresses to new item info to register for that item
 */
function updateAreasWithNewItems(areas, itemMapping) {
  areas.forEach((area) => {
    area.rooms.forEach((room) => {
      room.items.forEach((item) => {
        const newItem = itemMapping[item.address];
        if (newItem) {
          item.type = newItem.type;
          item.subtype = newItem.subtype;
          item.varB = newItem.varB;
        }
      });
    });
  });
}

module.exports = updateAreasWithNewItems;