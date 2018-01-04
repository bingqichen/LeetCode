/**
 * js 实现二叉查找树
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
