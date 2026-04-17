/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for(let i=0; i<s.length; i++){
        let char = s[i];
        switch(char){
            case "(": stack.push(")");
            break;

            case "{" : stack.push("}");
            break;
            case "[" : stack.push("]");
            break;
            default:
            let item = stack.pop();
            if(item!==char)
            return false;
        }
    }
    return stack.length===0;
};

let = s = "()";
let result= isValid(s);
console.log(result);