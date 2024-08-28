var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        if (val === void 0) { val = 0; }
        if (next === void 0) { next = null; }
        this.val = val;
        this.next = next;
    }
    return ListNode;
}());
function getIntersectionNode(headA, headB) {
    function getLength(head) {
        var length = 0;
        var current = head;
        while (current !== null) {
            length++;
            current = current.next;
        }
        return length;
    }
    var lengthA = getLength(headA);
    var lengthB = getLength(headB);
    var ptrA = headA;
    var ptrB = headB;
    if (lengthA > lengthB) {
        for (var i = 0; i < lengthA - lengthB; i++) {
            ptrA = ptrA.next;
        }
    }
    else if (lengthB > lengthA) {
        for (var i = 0; i < lengthB - lengthA; i++) {
            ptrB = ptrB.next;
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
function createIntersectingLists() {
    var common = new ListNode(4, new ListNode(5, new ListNode(6)));
    var headA = new ListNode(1, new ListNode(2, new ListNode(3, common)));
    var headB = new ListNode(9, new ListNode(10, common));
    return [headA, headB];
}
var _a = createIntersectingLists(), headA = _a[0], headB = _a[1];
var intersection = getIntersectionNode(headA, headB);
console.log("Intersection node value: ".concat(intersection ? intersection.val : "No intersection"));
