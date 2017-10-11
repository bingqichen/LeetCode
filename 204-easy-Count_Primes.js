/**
204. Count Primes

Description:

Count the number of prime numbers less than a non-negative number, n.
 */

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 1) return 0;

  var count = 0;
  var arr = Array(n);

  // 原版
  // for (var i = 2; i < n; i++) {
  //   if (arr[i] !== false) count++;
  //   for (var j = 2; i * j < n; j++) {
  //     arr[i * j] = false;
  //   }
  // }

  for (var i = 2; i < n; i++) {
    if (arr[i] !== false) {
      count++;
      for (var j = 2; i * j < n; j++) {
        arr[i * j] = false;
      }
    }
  }

  return count;
};

console.log(countPrimes(5));
