/**
605. Can Place Flowers

Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: True
Example 2:
Input: flowerbed = [1,0,0,0,1], n = 2
Output: False
Note:
The input array won't violate no-adjacent-flowers rule.
The input array size is in the range of [1, 20000].
n is a non-negative integer which won't exceed the input array size.
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let planted = 0;
  for(let i = 0; i < flowerbed.length; i += 1) {
    if (planted >= n) {
      break;
    }
    if (flowerbed[i] === 0) {
      const prevVal = i === 0 ? 0 : flowerbed[i - 1];
      const nextVal = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
      if (prevVal === 0 && nextVal === 0) {
        planted += 1;
        flowerbed[i] = 1;
      }
    }
  }

  return planted === n;
};
