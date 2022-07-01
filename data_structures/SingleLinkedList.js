class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let currentNode = this.head;
    let prevNode = null;
    let popedNode = null;

    while (currentNode) {
      if (!currentNode.next) {
        popedNode = currentNode;
        this.tail = prevNode;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
          this.tail = null;
          this.head = null;
        }
      }

      currentNode = currentNode.next;
      prevNode = currentNode;
    }

    return popedNode;
  }

  shift() {
    if (!this.head) {
      return;
    }

    const headNode = this.head;

    if (headNode.next) {
      this.head = headNode.next;
      this.length--;
    } else {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    return headNode;
  }

  unshift(value) {
    const newNode = new Node(value);

    const currentHead = this.head;

    if (!currentHead) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = currentHead;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;

    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    return currentNode;
  }

  set(index, value) {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.value = value;
    return true;
  }
}

var list = new SingleLinkedList();

list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push(":)");
console.log(list.length);
console.log(list.get(0));
