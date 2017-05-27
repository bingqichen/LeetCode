/**
 27. Remove Element

Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement2 = function (nums, val) {
  var reg = new RegExp(val, "gi");
  var result = 0;
  for (var i = nums.toString().replace(reg, '').split(',').length - 1; i >= 0; i--) {
    var itemLen = nums.toString().replace(reg, '').split(',')[i].length;
    result = itemLen ? result + 1 : result;
    nums.splice(i, itemLen ? 0 : 1);
  }

  return result;
};

var removeElement = function (nums, val) {
  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
}
