/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    var start = 0;
    var end = height.length -1;
    var area = 0;

    while(start < end){
        var minHeight = Math.min(height[start], height[end] );
        area = Math.max(area, minHeight * (end - start));
        while (start < end && height[start] <= minHeight){
            start++;
        }
        while(start < end && height[end] <= minHeight){
            end--;
        }
    }
    return area;
};

let height = [1,8,6,2,5,4,8,3,7];
let result = maxArea(height);
console.log(result);