/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
        const result = obj.length === 0;
        return result;
    } else {
        const result = Object.keys(obj).length === 0;
        return result;
    }
};