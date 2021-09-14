import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(array) {
    let catCount = 0;
    const cat = "^^";
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < array[i].length; k++) {
        if (array[i][k] == cat) {
          catCount++;
        }
      }
    }
    return catCount;
  }
