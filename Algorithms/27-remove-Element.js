/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==val){
            nums[count++]=nums[i]
        }
    }
    return count;
};

let= nums = [3,2,2,3];
let = val = 3;
// Call the function
let count = removeElement(nums, val);

// Output the result
// console.log("Output:", count);

for (let i = count; i < nums.length; i++) {
    nums[i] = "_";
}

console.log(`${count}, nums = [${nums.join(", ")}]`);