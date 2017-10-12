/**
371. Sum of Two Integers

Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Given a = 1 and b = 2, return 3.

Credits:
Special thanks to @fujiaozhu for adding this problem and creating all test cases.
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
  if (a === 0 || b === 0) {
    return a ^ b;
  }
  var sum = a ^ b;
  return getSum(sum, (a & b) << 1)
};

console.log(getSum(10, 2))
