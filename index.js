import Tree from './scripts/tree.js';
import { prettyPrint, getRandomNumbers } from './scripts/helperFunctions.js';

const randomNumbers = getRandomNumbers();
const testTree = new Tree(randomNumbers);

console.log(testTree.isBalanced());

console.log(testTree.levelOrder());
console.log(testTree.preOrder());
console.log(testTree.postOrder());
console.log(testTree.inOrder());

testTree.insert(128);
testTree.insert(143);
testTree.insert(175);

console.log(testTree.isBalanced());
testTree.rebalance();
console.log(testTree.isBalanced());

console.log(testTree.levelOrder());
console.log(testTree.preOrder());
console.log(testTree.postOrder());
console.log(testTree.inOrder());

prettyPrint(testTree.root);
