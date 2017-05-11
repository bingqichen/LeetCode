/**
532. K-diff Pairs in an Array

Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

Example 1:
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.

Example 2:
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).

Example 3:
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).

Note:
The pairs (i, j) and (j, i) count as the same pair.
The length of the array won't exceed 10,000.
All the integers in the given input belong to the range: [-1e7, 1e7].
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  // 排序
  nums.sort(function(a, b) {
    return a - b;
  });

  // 统计不同数字出现的频率
  var numsFreq = {};
  for(var i = 0, j = nums.length; i < j; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      numsFreq[nums[i]]++;
    } else {
      numsFreq[nums[i]] = 1;
    }
  }

  var result = 0;

  var numsType = Object.keys(numsFreq); // 记录的不同数字
  for(var i = 0, j = numsType.length; i < j; i++) {
    if (k === 0 && numsFreq[numsType[i]] >= 2) {
      result++;
      // 差的绝对值不可能为负数
    } else if (k > 0 && numsFreq.hasOwnProperty(Number(numsType[i]) + k)) {
      result++
    }
  }

  return result;
};

console.log(findPairs([1, 2, 3, 4, 5], -1));
