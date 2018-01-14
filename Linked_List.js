/**
 * 单向链表的 js 实现
 */

/**
 * 单个链表节点
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val = null) {
    this.head = null;
    this.length = 0;
    if (val) {
      this.head = new Node(val);
      this.length = 1;
    }
  }

  append(val) {
    const node = new Node(val);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length += 1;
  }

  removeAt(position) {
    if (position >= this.length || position < 0) {
      return null;
    }
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let index = 0;
      let prev = null;
      while (index < position) {
        prev = current;
        current = current.next;
        index += 1;
      }
      prev.next = current.next;
    }
    this.length -= 1;
    return current.val;
  }

  insert(position, val) {
    if (position >= this.length || position < 0) {
      return false;
    }
    const node = new Node(val);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let index = 0;
      let current = this.head;
      let prev = null;
      while (index < position) {
        prev = current;
        current = current.next;
        index += 1;
      }
      node.next = current;
      prev.next = node;
    }
    this.length += 1;
    return true;
  }

  indexOf(val, index = 0) {
    if (index >= this.length) {
      return -1;
    }
    let _index = 0;
    let current = this.head;
    while (_index < this.length) {
      if (current.val === val && _index >= index) {
        return _index;
      }
      current = current.next;
      _index += 1;
    }
    return -1;
  }

  remove(val) {
    const index = this.indexOf(val);
    return this.removeAt(index);
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return !!this.length;
  }
}
