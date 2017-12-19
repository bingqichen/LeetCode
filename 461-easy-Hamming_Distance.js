/**
 * 461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.

 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  if (x === y) {
    return 0;
  }
  var _x = x.toString(2);
  var _y = y.toString(2);

  var maxLen = x > y ? _x.length : _y.length;

  var diffCount = 0;
  for(var i = 0; i < maxLen; i += 1) {
    if ((_x[_x.length - i - 1] !== _y[_y.length - i - 1]) && (_x[_x.length - i - 1] == 1 || _y[_y.length - i - 1] == 1)) {
      diffCount += 1;
    }
  }

  return diffCount;
};
