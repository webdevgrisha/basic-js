const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, row, index) => {
    const prevRow = index - 1 >= 0 ? matrix[index - 1] : row;
    return (sum += row.reduce((sum, num, index) => {
      const isZeroAbove = prevRow[index] === 0;
      return sum += isZeroAbove ? 0 : num;
    }, 0));
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
