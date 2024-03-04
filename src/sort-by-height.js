const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const minusOnePos = arr
    .map((num, index) => (num === -1 ? index : null))
    .filter((num) => num !== null);

  if (minusOnePos.length === arr.length) return arr;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num === -1) {
      arr.splice(i, 1);
      i--;
    }

    if (num > -1) break;
  }

  minusOnePos.forEach((pos) => arr.splice(pos, 0, -1));

  return arr;
}

module.exports = {
  sortByHeight,
};
