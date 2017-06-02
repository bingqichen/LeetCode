/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  var result = 0;
  var numArr = ('00000000000000000000000000000000' + n.toString(2))
    .slice(-32)
    .split('');

  for (var i = 0; i < 32; i++) {
    if (numArr[i] === '1') {
      result += Math.pow(2, i);
    }
  }

  return result;
};

var reverseBits2 = function (n) {
  var numArr = ('00000000000000000000000000000000' + n.toString(2))
    .slice(-32)
    .split('')
    .reverse()

  return parseInt(numArr.join(''), 2);
};

console.log(reverseBits(43261596));
