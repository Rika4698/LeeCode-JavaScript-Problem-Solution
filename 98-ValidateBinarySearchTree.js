/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var tree = function(root, min, max){
    if(!root)
        return true;
    if(root.val <= min || root.val >= max)
        return false;
    return tree(root.left, min, root.val) && tree(root.right, root.val, max);

}
var isValidBST = function(root) {
    var MIN = -(Math.pow(2,53)-1);
    var MAX = (Math.pow(2,53) - 1);
    return tree(root, MIN, MAX );
};

let root = [2,1,3];
let result = isValidBST(root);
console.log(result);