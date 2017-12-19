/**
59. Spiral Matrix II

Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
 */

/**
* @param {number} n
* @return {number[][]}
*/
var generateMatrix = function (n) {
  if (n <= 0) return [];
  let matrix = [];
  for (let i = 0; i < n; i += 1) {
    matrix.push([]);
  }

  var iStart = 0;
  var iEnd = n - 1;
  var jStart = 0;
  var jEnd = n - 1;
  var count = 1;

  while(iStart <= iEnd && jStart <= jEnd) {
    for (var i = jStart; i <= jEnd; i += 1) {
      matrix[iStart][i] = count;
      count += 1;
    }
    iStart += 1;

    for (var i = iStart; i <= iEnd; i += 1) {
      matrix[i][jEnd] = count;
      count += 1;
    }
    jEnd -= 1;

    for (var i = jEnd; i >= jStart; i -= 1) {
      if (iStart <= iEnd) {
        matrix[iEnd][i] = count;
        count += 1;
      }
    }
    iEnd -= 1;

    for (var i = iEnd; i >= iStart; i -= 1) {
      if (jStart <= jEnd) {
        matrix[i][jStart] = count;
        count += 1;
      }
    }
    jStart += 1;
  }

  return matrix;
};
