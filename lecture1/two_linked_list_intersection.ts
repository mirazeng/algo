class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  function getLength(head: ListNode | null): number {
    let length = 0;
    let current = head;
    while (current !== null) {
      length++;
      current = current.next;
    }
    return length;
  }

  const lengthA = getLength(headA);
  const lengthB = getLength(headB);

  let ptrA = headA;
  let ptrB = headB;

  if (lengthA > lengthB) {
    for (let i = 0; i < lengthA - lengthB; i++) {
      ptrA = ptrA!.next;
    }
  } else if (lengthB > lengthA) {
    for (let i = 0; i < lengthB - lengthA; i++) {
      ptrB = ptrB!.next;
    }
  }

  while (ptrA !== null && ptrB !== null) {
    if (ptrA === ptrB) {
      return ptrA;
    }
    ptrA = ptrA.next;
    ptrB = ptrB.next;
  }
  return null;
}

function createIntersectingLists(): [ListNode, ListNode] {
  const common = new ListNode(4, new ListNode(5, new ListNode(6)));
  const headA = new ListNode(1, new ListNode(2, new ListNode(3, common)));
  const headB = new ListNode(9, new ListNode(10, common));
  return [headA, headB];
}

const [headA, headB] = createIntersectingLists();
const intersection = getIntersectionNode(headA, headB);
console.log(
  `Intersection node value: ${intersection ? intersection.val : "No intersection"}`,
);
