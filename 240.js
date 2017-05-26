/**
240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
For example,

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix2 = function (matrix, target) {
  console.time('耗时');

  if (!matrix.length || !matrix[0].length) return false;

  var x = 0;
  for (var i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === target) {
      console.timeEnd('耗时');
      return true;
    } else if (matrix[0][i] > target) {
      x = i - 1;
      break;
    }
  }

  for (var i = 0; i < matrix.length; i++) {
    if (x < 0) {
      console.timeEnd('耗时');
      return false;
    }

    for (var j = 0; j <= (x ? x : matrix[0].length); j++) {
      if (matrix[i][j] === target) {
        console.timeEnd('耗时');
        return true;
      } else if (matrix[i][j] > target){
        x = j - 1;
        break;
      }
    }
  }

  console.timeEnd('耗时');
  return false;
};

var searchMatrix = function (matrix, target) {
  console.time('耗时');

  if (!matrix.length || !matrix[0].length) return false;

  var x = matrix[0].length - 1;
  var y = 0;

  while (x >= 0 && y < matrix.length) {
    if (matrix[y][x] === target) {
      console.timeEnd('耗时');
      return true;
    } else if (matrix[y][x] > target) {
      x--;
    } else {
      y++;
    }
  }

  console.timeEnd('耗时');
  return false;
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5)
)
