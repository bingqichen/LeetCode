/**
119. Pascal's Triangle II
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?
 */

/**
* @param {number} rowIndex
* @return {number[]}
*/
var getRow = function (rowIndex) {
  if (rowIndex < 0) {
    return [];
  }

  var res = [];
  for (var i = 0; i < rowIndex + 1; i++) {
    var line = [];
    var lineLen = i + 1;
    for (var j = 0; j < lineLen; j++) {
      if (j == 0 || j == lineLen - 1) {
        line.push(1);
      } else {
        line.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }

    res.push(line);
  }

  return res[rowIndex];
};

console.log(getRow(3));
