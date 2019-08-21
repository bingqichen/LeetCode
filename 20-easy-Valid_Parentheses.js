/**
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  var sMap = {
    '(': -1,
    '{': -2,
    '[': -3,
    ']': 3,
    '}': 2,
    ')': 1
  }
  var stack = []
  var pass = true
  for (var i = 0, j = s.length; i < j; i++) {
    var subSVal = sMap[s[i]]
    if (subSVal < 0) {
      stack.push(subSVal)
      continue
    } else {
      var popVal = stack.pop()
      if (popVal === -subSVal) {
        continue
      } else {
        pass = false
        break
      }
    }
  }
  return pass && !stack.length
}

var x = isValid('[')
console.log(x)
