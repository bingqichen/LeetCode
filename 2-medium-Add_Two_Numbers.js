/**
2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (l1.val === 0 && l1.next === null) return l2
  else if (l2.val === 0 && l2.next === null) return l1

  var head = null
  var result = null
  var carry = 0 // 进位
  while (l1 !== null || l2 !== null) {
    var sum = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + carry
    carry = sum >= 10 ? 1 : 0
    var tmpNode = new ListNode(sum % 10)

    if (!head) { // 生成头节点
      result = tmpNode
      head = result
    } else { // 持续生成子节点
      result.next = tmpNode
      result = result.next
    }

    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }
  if (carry) result.next = new ListNode(1)

  return head
}
