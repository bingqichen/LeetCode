/**
171. Excel Sheet Column Number

Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
Credits:
Special thanks to @ts for adding this problem and creating all test cases.
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber2 = function (s) {
  return s.split('')
    .map(item => (item.charCodeAt() - 64))
    .reduce((acc, val) => (acc * 26 + val), 0);
};

var titleToNumber = function (s) {
  var result = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    result = result + (s[i].charCodeAt() - 64) * Math.pow(26, s.length - i - 1);
  }
  return result;
};

console.log(titleToNumber('AB'));
