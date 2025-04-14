/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    return new RegExp(`^${p}$`).test(s); 
};

let s = "ab", p = ".*";
let result = isMatch(s,p);
console.log(result);