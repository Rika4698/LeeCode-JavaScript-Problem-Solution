/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map={};
    let set = 0;
    const longest = s.split('').reduce((max,value,i) =>{
        set =  map[value] >= set?   map[value] +1 : set;
        map[value] = i;
        let maximum = Math.max(max, i - set + 1);
        return maximum;
    },0);
    return longest;
};

let s = "pwwkew";
let result = lengthOfLongestSubstring(s);
console.log(result);