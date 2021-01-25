const Reqs = require('./Reqs');

/**
 * Given Soma's inventory, determines what locks he can currently open
 * @param  {Keys[]} heldKeys - A list of keys that Soma currently holds
 * @return {Locks[]} - A list of the locks Soma can currently open with these keys
 */
function determineAccess(heldKeys) {
  const locks = [];
  Reqs.forEach(({ lock, keys }) => {
    if (keys.some(combo => combo.every(k => heldKeys.indexOf(k) !== -1))) {
      locks.push(lock);
    }
  });
  return locks;
}

module.exports = determineAccess;
