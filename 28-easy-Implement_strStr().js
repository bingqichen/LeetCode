/**
28. Implement strStr()

Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) {
    return 0;
  }
  var reg = new RegExp(`(^.*?)${needle}(.*$)`);
  var res = haystack.replace(reg, '$1');
  if (res.length == haystack.length) {
    return -1;
  }
  return res.length;
};

console.log(strStr('aaa', 'a'));
