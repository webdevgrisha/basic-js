const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  throw new NotImplementedError("Not implemented");
  // const namesObj = {};

  // return names.map((name) => {
  //   if (name in namesObj) {
  //     namesObj[name] += 1;

  //     const repeatCount = namesObj[name];
  //     const needRepeat = Number(repeatCount % 2 !== 0) + 1;
  //     const nameNumber = Math.floor(repeatCount / 2);

  //     return name + `(${nameNumber})`.repeat(needRepeat);
  //   } else {
  //     namesObj[name] = 1;

  //     return name;
  //   }
  // });
}

module.exports = {
  renameFiles,
};
