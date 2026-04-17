
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const word = s.trim().split(/\s+/).pop().length;
    return word;
};

let s = "fly me   to   the moon";
let result = lengthOfLastWord(s);
console.log(result);