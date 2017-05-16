/**
447. Number of Boomerangs

Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
Subscribe to see which companies asked this question.
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  if (points.length <= 2) {
    return 0;
  }

  var total = 0;

  var pointsCount = points.length;
  var distances = {};
  for (var i = 0; i < pointsCount; i++) {
    for (var j = i + 1; j < pointsCount; j++) {
      distances[i + '_' + j] = Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2);
    }
  };

  var distancesKeys = Object.keys(distances);

  for (var i = 0; i < pointsCount; i++) {
    // 找出以当前节点为起始点的距离数据
    var currentDistancesKeys = distancesKeys.filter(function (item) {
      return (item.split('_')).filter(function (item) {
        return String(i) === item;
      }).length;
    });

    // 统计该点到其他各个点出现了几种距离长度，并统计每种距离出现的次数
    var recordCount = {};
    for (var j = 0; j < currentDistancesKeys.length; j++) {
      var distance = distances[currentDistancesKeys[j]];
      if (recordCount.hasOwnProperty(distance)) {
        recordCount[distance]++;
      } else {
        recordCount[distance] = 1;
      }
    }

    // 计算出现了几种长度
    var recordCountKeys = Object.keys(recordCount);
    for (var j = 0; j < recordCountKeys.length; j++) {
      if (recordCount[recordCountKeys[j]] >= 2) {
        // 如果某种长度 >=2，得到当前长度值出现的频次
        var distanceFreq = recordCount[recordCountKeys[j]];

        total = total + distanceFreq * (distanceFreq - 1);
      }
    }
  }

  return total;
};

numberOfBoomerangs([[0, 0], [1, 0], [2, 0]]);
