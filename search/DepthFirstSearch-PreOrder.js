const BST = require("../data_structures/BST");

function DFS_PreOreder(tree) {
  if (!tree.root) {
    return [];
  }

  const output = [];

  function travelNode(node) {
    output.push(node.value);

    if (node.left) {
      travelNode(node.left);
    }

    if (node.right) {
      travelNode(node.right);
    }
  }

  travelNode(tree.root);

  return output;
}

console.log(DFS_PreOreder(BST.tree));
