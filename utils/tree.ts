export class TreeNode {
  constructor(public val: any, public children: TreeNode[] = [], public root = false) {
  }
}

export class Tree {
  static traverse(node: TreeNode) {
    const { val, children } = node;

    console.log(val);

    if (children.length > 0) {
      for (const n of children) {
        this.traverse(n);
      }
    }
  }

  static toArray(node: TreeNode, result = []) {
    const {children } = node;

    if (node.root) {
      result.push(node.val);
    }

    for (const c of children) {
      result.push(c.val);
      this.toArray(c, result);
    }

    return result;
  }
}



