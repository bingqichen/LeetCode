/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
  var bull = cows = 0;
  var len = secret.length;
  for (var i = 0; i < len; i++) {
    if (secret[i] === guess[i]) bull++;
    else {
      if ()
    }
  }
};

console.log(getHint(1111, 0123));
