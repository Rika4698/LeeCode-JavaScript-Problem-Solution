/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x == x.toString().split("").reverse().join("");
};
let x=121;
let result = isPalindrome(x);
console.log(result);