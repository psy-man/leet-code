import { TestHelper, Type } from '../../utils/test-case';
import { LinkedList } from '../../utils/linked-list';


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param head
 * @param val
 */
const removeElements = function (head, val) {
  let prev = null;
  let node = head;

  while (node) {
    if (node.val === val) {
      if (prev === null) {
        head = node.next;
        node = head;
        continue;
      }

      prev.next = node.next;
    } else {
      prev = node;
    }

    node = node.next;
  }


  return head;
};


//////////////// Tests //////////////////////

describe('removeElements', () => {
  const list1 = new LinkedList(6, 1, 6, 6, 4, 5, 6);
  const list2 = new LinkedList(1, 1, 1, 3, 1);

  const test = new TestHelper(Type.linkedList);
  test.expect(list1.head, 6).toEqual([1, 4, 5]);
  test.expect(list2.head, 1).toEqual([3]);

  test.execute(removeElements);
});
