import mergeSort from './mergeSort.js';
import Node from './node.js';

function buildTree(array) {
  const uniqueArray = [...new Set(array)];
  const sortedArray = mergeSort(uniqueArray);

  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  const root = buildTreeRecursion(sortedArray);

  return root;
}

function buildTreeRecursion(array) {
  if (array.length <= 0) {
    return null;
  }

  if (array.length === 1) {
    return new Node(array[0]);
  }

  const middleIndex = Math.floor(array.length / 2);
  const middleValue = array[middleIndex];

  const node = new Node(middleValue);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex + 1);

  node.left = buildTreeRecursion(leftArray);
  node.right = buildTreeRecursion(rightArray);

  return node;
}

export default buildTree;
