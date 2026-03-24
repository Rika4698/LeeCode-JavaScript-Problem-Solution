/**
 * @param {number[]} nums
 * @return {number}
 */

 var missingNumber = function (nums) {
    let n = nums.length;

    let expectedSum = n * (n+1) / 2;
    let actualSum = 0;
    for (let num of nums) {
        actualSum += num;
    }
    let result = expectedSum - actualSum;
    return result;
 }
 
 let nums = [0,1];
 let result = missingNumber(nums);
 console.log(result);