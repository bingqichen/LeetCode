/**
231. Power of Two

Given an integer, write a function to determine if it is a power of two.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) {
    return false;
  }
  const binStr = n.toString(2);
  let result = true;
  for(let i = 1, len = binStr.length; i < len; i++){
    if (binStr[i] === '1') {
      result = false;
      break;
    }
  }

  return result;
};
