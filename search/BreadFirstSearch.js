class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;

      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (currentNode.value < value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;

          return this;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;

          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (true) {
      console.log(currentNode);
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      }
    }
  }
}

function bfs(tree) {
  if (!tree.root) {
    return [];
  }

  const queue = [];
  const visited = [];
  let node;

  queue.push(tree.root);

  while (queue.length) {
    node = queue.shift();

    visited.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return visited;
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(12);
tree.insert(11);
tree.insert(21);
tree.insert(0);

//        10
//     5       12
//  0      11    21

console.log(tree);

console.log(bfs(tree));
