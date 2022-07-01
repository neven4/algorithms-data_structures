class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;

    return this.size;
  }

  dequeue() {
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

const newStack = new Queue();
newStack.enqueue(1);
newStack.enqueue(2);
newStack.enqueue(3);
console.log(newStack);
console.log(newStack.dequeue());
console.log(newStack.dequeue());
console.log(newStack);
