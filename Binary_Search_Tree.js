/**
 * js 实现二叉查找树
 * 二叉查找树，也称二叉搜索树、有序二叉树、排序二叉树，是指一棵空树或者具有下列性质的二叉树：
 * 1. 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值；
 * 2. 若任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值；
 * 3. 任意节点的左、右子树也分别为二叉查找树；
 * 4. 没有键值相等的节点。
 */

/**
 * 单个节点
 */
class Node {
  constructor(data = null) {
    this.data = data;
    this.left = this.right = null;
  }
}

class Tree {
  constructor(data = null) {
    this.root = null;
    if (data) {
      this.root = new Node(data);
    }
  }

  insert(data) {
    const node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (node.data === data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
    } else if (node.data > data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
  find(data) {
    let node = this.root;
    while(true){
      if (node === null){
        return null;
      } else if (data === node.data) {
        return node;
      }
      node = data < node.data ? node.left : node.right;
    }
  }
  getMaxDepth() {
    return this.depth(this.root);
  }
  depth(node) {
    if (node === null) {
      return 0;
    }
    return Math.max(this.depth(node.left), this.depth(node.right)) + 1;
  }
}

const tree = new Tree();

tree.insert(8);
tree.insert(14);
tree.insert(13);
tree.insert(6);
tree.insert(3);
tree.insert(7);
tree.insert(11);

// tree.remove(11);

tree.getMaxDepth();

console.log(tree);
