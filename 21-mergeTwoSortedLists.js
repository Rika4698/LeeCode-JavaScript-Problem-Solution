/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {

    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let pre = new ListNode(-1);
    let current = pre;
    while(list1 !== null && list2!== null){
        if(list1.val<=list2.val){
            current.next=list1;
            list1= list1.next;
        }else{
            current.next=list2;
            list2=list2.next;
        }
        current=current.next;
    }
    if(list1 !== null){
        current.next=list1;

    }else{
        current.next=list2;
    }
    return pre.next;
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

let list1 = createLinkedList([1,2,4]);
let list2 = createLinkedList([1,3,4]);
let result = mergeTwoLists(list1, list2);
printLinkedList(result);