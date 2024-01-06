Provides a class, which constructor accepts an array of integers, removes duplicates, and returns a balanced Binary Search Tree with these methods:

- `insert(value)` inserts a node with given value while maintaining property of BST.
- `delete(value)` deletes node with given value while maintaining property of BST.
- `find(value)` returns a node with given value, if there is no such node, returns null.
- `height(node)` returns height of given node, if no node was given, returns height of the tree.
- `depth(node)` returns a depth of a given node, if no node was given, returns height of the tree.
- `isBalanced()` returns true if tree is balanced, false if not.
- `rebalance()` rebalances the tree if it isn't balanced.

### Traversal methods

They traverse the tree with specified approach. If callback is given, they execute it for each node providing it as an argument. If not they return an array of values.

- `levelOrder(callback)` traverses the tree in level order approach. Iterative implementation.
- `levelOrderRecursive(callback)` traverses the tree in level order approach. Recursive implementation.
- `inOrder(callback)` traverses the tree in in order approach.
- `preOrder(callback)` traverses the tree in pre order approach.
- `postOrder(callback)` traverses the tree in post order approach.
