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

const testNumbers = [
  17, 14, 10, 18, 15, 8, 9, 2, 7, 4, 11, 19, 3, 5, 16, 6, 13, 1, 12, 20,
];

const testTree = new Tree(testNumbers);
prettyPrint(testTree.root);
console.log(testTree.postOrder(logWithWorks));

function logWithWorks(node) {
  console.log(`${node.value} works`);
}
