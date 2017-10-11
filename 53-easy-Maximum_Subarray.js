/**
53. Maximum Subarray

Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.

click to show more practice.

Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var sum = 0;
  var max = nums[0];
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    sum = Math.max(sum, 0);
  }

  return max;
};
