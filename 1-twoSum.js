/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashMap = new Map();
    for(let i=0; i<nums.length; i++)
    {
     let needNumber= target - nums[i];
    
    if(hashMap.has(needNumber))
    {
     return [i, hashMap.get(needNumber)];
    }
    hashMap.set(nums[i], i);
    }
 
 };

 // Example input
let nums = [2, 7, 11, 15];
let target = 9;

// Call the function and log the result
let result = twoSum(nums, target);
console.log( result);  // Output: [1, 0] (index positions)