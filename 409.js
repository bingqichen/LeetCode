/**
409. Longest Palindrome

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
 */

/**
* @param {string} s
* @return {number}
*/
var longestPalindrome = function (s) {
  var count = {};
  var len = 0;
  for (var i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (char in count) {
      count[char] += 1;
      if (count[char] === 2) {
        len += 2;
        delete count[char];
      }
    } else {
      count[char] = 1;
    }
  }

  if (Object.keys(count).length) {
    len += 1;
  }

  return len;
};
