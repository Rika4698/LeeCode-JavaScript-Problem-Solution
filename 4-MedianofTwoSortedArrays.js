/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sorted = [...nums1, ...nums2].sort((a,b) => a - b);
    const index = Math.floor((sorted.length - 1) / 2);

    const sort = sorted.length % 2 === 0 ? (sorted[index] + sorted[index + 1]) / 2 : sorted[index];

    return sort;
};

let nums1 = [1,2];
let nums2 = [3,4];
let result = findMedianSortedArrays(nums1,nums2);
console.log(result);