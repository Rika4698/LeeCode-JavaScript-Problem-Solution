/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0);
    let current = head;
    let carry = 0;
    while(l1 !== null || l2 !== null){
        let x = (l1 !== null) ? l1.val:0;
        let y = (l2 !== null) ? l2.val:0;
        let sum = carry + x + y;
        carry = Math.floor(sum/10);
        current.next = new ListNode(sum%10);
        current = current.next;
        if(l1 !== null) l1= l1.next;
        if(l2 !== null) l2 = l2.next;
    }
    if(carry>0)current.next = new ListNode(carry);
    return head.next;
};

function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}
function printLinkedList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result);
}

// Example inputs
let l1 = createLinkedList([2, 4, 3]); // Represents 342
let l2 = createLinkedList([5, 6, 4]); // Represents 465

// Call the function and print the result
let result = addTwoNumbers(l1, l2);
printLinkedList(result); 