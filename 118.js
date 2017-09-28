// 118. Pascal's Triangle

/**
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,
Return

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return [];
  }

  var res = [];
  for(var i = 0; i < numRows; i++){
    var line = [];
    var lineLen = i + 1;
    for (var j = 0; j < lineLen; j++){
      if (j == 0 || j == lineLen - 1) {
        line.push(1);
      } else {
        line.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }

    res.push(line);
  }

  return res;
};

console.log(generate(5));
