/**
107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
 */

/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  function traversal(node, list, level) {
    if (list[level]) {
      list[level].push(node.val);
    } else {
      list[level] = [node.val];
    }
    if (node.left) {
      traversal(node.left, list, level + 1)
    }
    if (node.right) {
      traversal(node.right, list, level + 1)
    }
  }

  if (!root || root.val === null) {
    return [];
  }

  const list = [];
  traversal(root, list, 0);
  console.log(list);
  return list.filter(item => item).reverse();
};

const tree = {
  val: 0,
  left: {
    val: 2,
    left: {
      val: 1,
      left: {
        val: 5,
        left: null,
        right: null
      },
      right: {
        val: 1,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: {
        val: 6,
        left: null,
        right: null
      }
    },
    right: {
      val: -1,
      left: null,
      right: {
        val: 8,
        left: null,
        right: null
      }
    }
  }
}

console.time('time');
levelOrderBottom(tree);
console.timeEnd('time');
