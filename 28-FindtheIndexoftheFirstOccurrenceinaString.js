/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!needle)
        return 0;
    const word = haystack.split(needle);
    const final = word.length > 1 ? word[0].length : -1;
    return final;
};

let haystack = "sadbutsad";
let needle = "sad";

let result = strStr(haystack, needle);
console.log(result);