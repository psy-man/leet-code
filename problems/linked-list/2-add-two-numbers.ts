import { TestHelper, Type } from '../../utils/test-case';
import { LinkedList } from '../../utils/linked-list';


const addTwoNumbers = function(l1, l2) {
  let n1 = l1;
  let n2 = l2;

  let inc = null;
  let tail = null;

  while (n1) {
    let sum = n1.val;

    if (n2 !== null) {
      sum += n2.val;
    }

    if (inc !== null) {
      sum += inc;
    }

    if (sum >= 10) {
      n1.val = sum % 10;
      inc = ~~(sum / 10);
    } else {
      n1.val = sum;
      inc = null;
    }

    tail = n1;

    if (n2) {
      n2 = n2.next;
    }

    if (n1.next === null) {
      n1.next = n2;
      n2 = null;
    }

    n1 = n1.next;
  }

  if (inc !== null) {
    l2.val = inc;
    l2.next = null;

    tail.next = l2;
  }

  return l1;
};



//////////////// Tests //////////////////////

describe('addTwoNumbers', () => {
  const test = new TestHelper(Type.linkedList);

  test.expect(new LinkedList(1, 8).head, new LinkedList(0).head).toEqual([1, 8]);
  test.expect(new LinkedList(9).head, new LinkedList(9, 9, 9).head).toEqual([8, 0, 0, 1]);

  test.execute(addTwoNumbers);
});
