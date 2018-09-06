
export class LinkedListNode {
  constructor(public val, public next = null) {}
}

export class LinkedList {
  head: LinkedListNode;
  tail: LinkedListNode;

  constructor(...numbers: number[]) {
    for (const n of numbers) {
      this.add(n);
    }
  }

  add(num) {
    const node = new LinkedListNode(num);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  static toArray(head) {
    if (!head) {
      return [];
    }

    const res = [];

    let node = head;
    while (node !== null) {
      res.push(node.val);
      node = node.next;
    }

    return res;
  }
}
