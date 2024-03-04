const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rowLen = matrix[0].length;
  const rowCount = matrix.length;
  return matrix.map((row, rowIndex, matrix) => {
    return row.map((cell, cellIndex) => {
      if (cell) return 1;

      let minesCount = 0;

      const topPos = rowIndex - 1;
      const rightPos = cellIndex + 1;
      const bottomPos = rowIndex + 1;
      const leftPos = cellIndex - 1;

      // top
      if(topPos >= 0) {
        const start = cellIndex - 1 < 0 ? 0 : cellIndex - 1;
        const end = cellIndex + 1 >= rowLen ? rowLen - 1 : cellIndex + 1;
        for(let i = start; i <= end; i++) {
          minesCount += +matrix[topPos][i];
        }
      }

      // right
      if(rightPos < rowLen) {
        minesCount += +matrix[rowIndex][rightPos];
      }

      // bottom
      if(bottomPos < rowCount) {
        const start = cellIndex - 1 < 0 ? 0 : cellIndex - 1;
        const end = cellIndex + 1 >= rowLen ? rowLen - 1 : cellIndex + 1;
        for(let i = start; i <= end; i++) {
          minesCount += +matrix[bottomPos][i];
        }
      }

      // left
      if(leftPos >= 0) {
        minesCount += +matrix[rowIndex][leftPos];
      }

      return minesCount;
    });
  });
}

module.exports = {
  minesweeper
};
