const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Obj = {};
  const s2Obj = {};

  let commonCharacterCount = 0;

  countLetters(s1, s1Obj);
  countLetters(s2, s2Obj);

  for (let [key, value] of Object.entries(s1Obj)) {
    if (key in s2Obj) {
      commonCharacterCount += Math.min(value, s2Obj[key]);
    }
  }

  return commonCharacterCount;
}

function countLetters(str, obj) {
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter in obj) {
      obj[letter] += 1;
    } else {
      obj[letter] = 1;
    }
  }
}

module.exports = {
  getCommonCharacterCount,
};
