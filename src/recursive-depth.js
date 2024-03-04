const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    console.log(arr);
    let maxDepth = 1;
    arr.reduce((sum, item) => {
      if (Array.isArray(item)) {
        sum += this.calculateDepth(item);
      }

      if (sum > maxDepth) {
        maxDepth = sum;
      }

      sum = 1;
      
      return sum;
    }, 1);

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
