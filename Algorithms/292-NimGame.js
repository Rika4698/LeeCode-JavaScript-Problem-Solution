/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    let result = n % 4 !== 0;
    return result;
};

let n = 4;
let result = canWinNim(n);
console.log(result);