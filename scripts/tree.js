import buildTree from './buildTree.js';

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
}

export default Tree;
