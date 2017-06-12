/**
390. Elimination Game

There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Find the last number that remains starting with a list of length n.

Example:

Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6
 */

/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {
  var left = true; // 数据每两个为一组，这一轮要去掉的是左边的数
  var remaining = n; // 剩下的数字个数
  var step = 1; // 相隔两个数之间的步进
  var head = 1;

  while(remaining > 1) {
    if (left || remaining % 2 === 1) {
      head += step;
    }
    step = step * 2;
    remaining = Math.floor(remaining / 2);

    left = !left;

    console.log ( head, step, remaining, left );
  }

  return head;
};

console.log(lastRemaining(6));

/**
该题需要注意读题，本人第一次读题时只看了 example ，想当然的以为是奇数轮删除1、3、5...位数；偶数轮删除2、4、6...位数，其实是奇数轮从左往右删除，偶数轮从右往左删除，这就导致了少加一个 remaining % 2 === 1 的判断。
 */
