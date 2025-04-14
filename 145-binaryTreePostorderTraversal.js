/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// Function to build tree from level-order array
function buildTree(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (queue.length && i < arr.length) {
        let current = queue.shift();

        if (arr[i] !== null && arr[i] !== undefined) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}
var postorderTraversal = function(root) {
    if(!root)
    {
        return [];
    }
    return [
        ...postorderTraversal(root.left),
        ...postorderTraversal(root.right),
        root.val
    ];
    
};


let arr = [1,2,null,3];
let root = buildTree(arr);
let result = postorderTraversal(root);
console.log(result);