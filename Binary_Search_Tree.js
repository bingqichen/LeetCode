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
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}

class Tree {
  constructor (val = null) {
    this.root = null
    if (val) {
      this.root = new Node(val)
    }
  }

  // 插入值
  static _insert (val, node) {
    if (val < node.val) {
      if (node.left) {
        this._insert(val, node.left)
      } else {
        node.left = new Node(val)
      }
    } else {
      if (node.right) {
        this._insert(val, node.right)
      } else {
        node.right = new Node(val)
      }
    }
  }

  insert (val) {
    if (!this.root) {
      this.root = new Node(val)
      return
    }

    this.constructor._insert(val, this.root)
  }

  // 挂载的辅助函数
  static _mountMinTree (tree, host) {
    if (host.left) {
      this._mountMinTree(tree, host.left)
    } else {
      host.left = tree
    }
    return host
  }

  static _minNode (node) {
    if (!node) {
      return null
    }
    while (node && node.left) {
      node = node.left
    }
    return node
  }

  static _remove (val, node) {
    if (!node) {
      return null
    }

    if (val === node.val) { // 要删除的节点是当前节点
      if (!node.right) { // 右子树不存在，直接用左子树替换当前节点流程结束
        return node.left
      } else if (!node.left) {
        return node.right
      } else { // 右子树存在
        // return this._mountMinTree(node.left, node.right); // 取出左子树挂在到右子树的最小节点上，返回该右子树替换当前节点
        const minNode = this._minNode(node.right)
        node.val = minNode.val
        node.right = this._remove(minNode.val, node.right)
        return node
      }
    } else if (val < node.val) { // 要删除的节点在左子树
      node.left = this._remove(val, node.left)
      return node
    } else { // 要删除的节点在右子树
      node.right = this._remove(val, node.right)
      return node
    }
  }

  // 移除节点
  remove (val) {
    this.root = this.constructor._remove(val, this.root)
  }

  static _includes (val, node) {
    if (!node) {
      return false
    }
    if (val === node.val) {
      return true
    }
    return this._includes(val, val < node.val ? node.left : node.right)
  }

  includes (val) {
    return this.constructor._includes(val, this.root)
  }

  static depth (node) {
    if (!node) {
      return 0
    }
    return Math.max(this.depth(node.left), this.depth(node.right)) + 1
  }

  getMaxDepth () {
    return this.constructor.depth(this.root)
  }

  bfs () {
    if (!this.root) {
      return []
    }
    const queue = [this.root]
    const list = []
    while (queue.length) {
      const node = queue.shift()
      list.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    return list
  }

  dfsPre (node = this.root, list = []) {
    if (node) {
      list.push(node.val)
      this.dfsPre(node.left, list)
      this.dfsPre(node.right, list)
    }
    return list
  }

  dfsIn (node = this.root, list = []) {
    if (node) {
      this.dfsIn(node.left, list)
      list.push(node.val)
      this.dfsIn(node.right, list)
    }
    return list
  }

  dfsPost (node = this.root, list = []) {
    if (node) {
      this.dfsPost(node.left, list)
      this.dfsPost(node.right, list)
      list.push(node.val)
    }
    return list
  }
}

const tree = new Tree()

tree.insert(8)
tree.insert(14)
tree.insert(13)
tree.insert(6)
tree.insert(3)
tree.insert(7)
tree.insert(11)

tree.remove(11)

tree.getMaxDepth()

console.log(tree)
