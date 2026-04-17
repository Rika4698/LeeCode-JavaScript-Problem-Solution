
//   Definition for singly-linked list.
  
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

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

 
var mergeKLists = function(lists) {
    const map = new Map();
    for (let list of lists){
        while(list){
            map.set(list.val, (map.get(list.val) || 0) + 1);
            list = list.next;
        }
    }
    const sorted = [...map].sort(([a], [b]) => a - b);
    const result = new ListNode();
    let tail = result;

    for(let [key, value] of sorted){
        while(value--){
            tail.next = new ListNode(key);
            tail = tail.next;
        }
    }

    return result.next;
};


let arrays = [[1,4,5],[1,3,4],[2,6]];
let lists = arrays.map(createLinkedList);
let res = mergeKLists(lists);
printLinkedList(res);
