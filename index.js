import Tree from './scripts/tree.js';

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

const testNumbers = [8, 4, 15, 9, 5, 6, 2, 14, 12, 3];
const testTree = new Tree(testNumbers);
prettyPrint(testTree.root);
testTree.insert(7);
prettyPrint(testTree.root);
