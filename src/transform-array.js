const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

const comands = {
  "--discard-next": function (arr, pos) {
    const startPos = pos;
    const deleteCount = pos + 1 >= arr.length ? 1 : 2;

    arr.splice(startPos, deleteCount);

    return "discard-next";
  },
  "--discard-prev": function (arr, pos, initial = false) {
    if (initial) {
      arr.splice(pos, 1);
    } else {
      const startPos = pos - 1 < 0 ? 0 : pos - 1;
      const deleteCount = pos - 1 < 0 ? 1 : 2;

      arr.splice(startPos, deleteCount);
    }

    return "discard-prev";
  },
  "--double-next": function (arr, pos) {
    const startPos = pos;
    const deleteCount = 1;
    const nextElem = arr[pos + 1];

    nextElem
      ? arr.splice(startPos, deleteCount, nextElem)
      : arr.splice(startPos, deleteCount);

    return "double-next";
  },
  "--double-prev": function (arr, pos, initial = false) {
    if (initial) {
      arr.splice(pos, 1);
    } else {
      const startPos = pos;
      const deleteCount = 1;
      const prevElem = arr[pos - 1];

      prevElem
        ? arr.splice(startPos, deleteCount, prevElem)
        : arr.splice(startPos, deleteCount);
    }

    return "double-prev";
  },
};

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const arrCopy = JSON.parse(JSON.stringify(arr));

  let isNextDiscardComand = null;
  let nextDiscardComandIndex = null;
  for (let i = 0, currPos = 0; i < arr.length; i++, currPos++) {
    const elem = arr[i];
    if (elem in comands) {
      let comand = null;

      if (isNextDiscardComand && elem.includes("prev") && i - nextDiscardComandIndex == 2) {
        comand = comands[elem](arrCopy, currPos, true);

        if (comand.includes("discard")) currPos += 1;
      } else {
        comand = comands[elem](arrCopy, currPos);
      }

      if (comand.includes("discard-next")) {
        isNextDiscardComand = true;
        nextDiscardComandIndex = i;
      } else {
        isNextDiscardComand = false;
      }

      if (comand.includes("discard")) currPos -= 2;
    }
  }
  return arrCopy;
}

module.exports = {
  transform,
};
