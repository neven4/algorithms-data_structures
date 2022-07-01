class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;

    return this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }

    const popedNode = this.head;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      const nextNode = this.head.next;
      this.head = nextNode;
      this.size--;
    }

    return popedNode;
  }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
console.log(newStack);
console.log(newStack.pop());
console.log(newStack);
