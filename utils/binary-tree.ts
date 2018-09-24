export class BinaryTreeNode {
  constructor(public val: any,
              public left: BinaryTreeNode = null,
              public right: BinaryTreeNode = null) {
  }
}


export class BinaryTree {
  static traverse(node: BinaryTreeNode) {
    if (node === null) {
      return;
    }

    console.log(node.val);
    this.traverse(node.left);
    this.traverse(node.right);
  }
}
