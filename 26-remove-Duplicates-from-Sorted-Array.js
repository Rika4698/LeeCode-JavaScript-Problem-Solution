/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length===0) return 0;
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== nums[i+1]){
             nums[count++]=nums[i];
        }
    }
    return count;
};
// Example input
let nums = [0,0,1,1,1,2,2,3,3,4];

// Call the function
let count = removeDuplicates(nums);

// Output the result
// console.log("Output:", count);

for (let i = count; i < nums.length; i++) {
    nums[i] = "_";
}

console.log(`${count}, nums = [${nums.join(", ")}]`);