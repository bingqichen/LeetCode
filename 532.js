/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  var total = 0;
  nums.sort();

  nums.forEach(function (item, index) {
    if (nums.slice(index + 1).includes(item + k) && index < nums.length - 1) {
      total++;
    }

    if (k > 0 && nums[index] === nums[index - 1]) {
      total--;
    }
  });

  console.log(total);

  return total;
};


findPairs([1,1,1,1,1], 0)
