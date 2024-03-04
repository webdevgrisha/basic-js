const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (n < 10) return n;

  const numArr = String(n).split("");
  const numbers = [];

  for (let i = 0; i < numArr.length; i++) {
    const numLeftPart = i ? numArr.slice(0, i).join("") : "";
    const numRightPart =
      i !== numArr.length - 1 ? numArr.slice(i + 1).join("") : "";

    numbers.push(+(numLeftPart + numRightPart));
  }

  return Math.max(...numbers);
}

module.exports = {
  deleteDigit,
};
