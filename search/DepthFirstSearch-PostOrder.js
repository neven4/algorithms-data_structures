const BST = require("../data_structures/BST");

function DFS_PostOreder(tree) {
  if (!tree.root) {
    return [];
  }

  const output = [];

  function travelNode(node) {
    if (node.left) {
      travelNode(node.left);
    }

    if (node.right) {
      travelNode(node.right);
    }

    output.push(node.value);
  }

  travelNode(tree.root);

  return output;
}

console.log(DFS_PostOreder(BST.tree));
