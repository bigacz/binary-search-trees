import mergeSort from './mergeSort.js';
import Node from './node.js';

function buildTree(array) {
  const uniqueArray = [...new Set(array)];
  const sortedArray = mergeSort(uniqueArray);

  const tree = buildTreeRecursion(sortedArray);

  return tree;
}

function buildTreeRecursion(array) {}

export default buildTree;
