/**
165. Compare Version Numbers

Compare two version numbers version1 and version2.
If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

You may assume that the version strings are non-empty and contain only digits and the . character.
The . character does not represent a decimal point and is used to separate number sequences.
For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

Here is an example of version numbers ordering:

0.1 < 1.1 < 1.2 < 13.37
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  if (version1 === version2) return 0;
  var arr1 = version1.split('.');
  var arr2 = version2.split('.');
  var len = Math.max(arr1.length, arr2.length);
  while (arr1.length || arr2.length) {
    var el1 = Number(arr1.shift()) || 0;
    var el2 = Number(arr2.shift()) || 0;

    len--;
    if (el1 > el2) {
      return 1;
    } else if (el1 < el2) {
      return -1;
    } else if (el1 == el2 && len == 0) {
      return 0;
    }
  }

  return 0;
};

console.log(compareVersion('01', '1')); 0
console.log(compareVersion('1.1', '1.10')); -1
console.log(compareVersion('1.0', '1')); 0
