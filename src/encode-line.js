const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resultStr = "";
  let repeatCount = 1;
  let prevLetter = str[0];

  for (let i = 1; i <= str.length; i++) {
    const letter = str[i];

    if (letter === prevLetter) {
      repeatCount++;
    } else {
      resultStr += repeatCount > 1 ? repeatCount + prevLetter : prevLetter;

      prevLetter = letter;
      repeatCount = 1;
    }
  }

  return resultStr;
}

module.exports = {
  encodeLine,
};
