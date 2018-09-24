import { TestHelper } from '../../utils/test-case';
import { BinaryTreeNode } from '../../utils/binary-tree';


const sameTree = (p, q) => {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  }


  if (p.val !== q.val) {
    return false;
  }

  return sameTree(p.left, q.left) && sameTree(p.right, q.right);
};


//////////////// Tests //////////////////////

describe('sameTree', () => {
  const test = new TestHelper();

  const tree1 = new BinaryTreeNode(1, new BinaryTreeNode(2), new BinaryTreeNode(1));
  const tree2 = new BinaryTreeNode(1, new BinaryTreeNode(1), new BinaryTreeNode(2));


  test.expect(tree1,  tree2).toEqual(false);
  test.expect(tree1,  tree1).toEqual(true);

  test.execute(sameTree);
});
