/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValue = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result =0;
    for(let i=0; i< s.length; i++){
        const firstValue = romanValue[s[i]];
        const secondValue = romanValue[s[i+1]];
        if(firstValue<secondValue){
            result += secondValue - firstValue;
            i++;
        } else{
            result += firstValue;
        }
    }
    return result;
};
let s = "III";
let result= romanToInt(s);
console.log(result);