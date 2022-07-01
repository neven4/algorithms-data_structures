const BST = require("../data_structures/BST");

function DFS_InOreder(tree) {
  if (!tree.root) {
    return [];
  }

  const output = [];

  function travelNode(node) {
    if (node.left) {
      travelNode(node.left);
    }

    output.push(node.value);

    if (node.right) {
      travelNode(node.right);
    }
  }

  travelNode(tree.root);

  return output;
}

console.log(DFS_InOreder(BST.tree));
