/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if(Array.isArray(obj)){
        const item = obj.length === 0;
        return item;
    } else {
        const result = Object.keys(obj).length === 0;
        return result;
    }
};