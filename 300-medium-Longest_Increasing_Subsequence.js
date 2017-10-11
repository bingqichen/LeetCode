/**
300. Longest Increasing Subsequence

Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  var lis = [];
  for (var i = 0; i < nums.length; i += 1) {
    lis.push(1);

    for (var j = 0; j < i; j += 1) {
      if (nums[i] > nums[j]) {
        // lis[i] = lis[j] + 1;
        lis[i] = Math.max(lis[j] + 1, lis[i]);
      }
    }
  }
  console.log(lis);

  return Math.max.apply(null, lis);
};

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
