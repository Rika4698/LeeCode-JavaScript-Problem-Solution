/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let xor = 0;

    for (let char of s){
        xor ^= char.charCodeAt(0);

    }

    for (let char of t){
        xor ^= char.charCodeAt(0);
    }

    return String.fromCharCode(xor);
};