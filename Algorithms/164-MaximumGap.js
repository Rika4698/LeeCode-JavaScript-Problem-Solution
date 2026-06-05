/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
   if (nums.length < 2) return 0;

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    // 🔥 FIX: all elements same
    if (min === max) return 0;

    let n = nums.length;
    let bucketSize = Math.ceil((max - min) / (n - 1));
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;

    let buckets = Array.from({ length: bucketCount }, () => ({
        min: Infinity,
        max: -Infinity
    }));

    for (let num of nums) {
        let index = Math.floor((num - min) / bucketSize);
        buckets[index].min = Math.min(buckets[index].min, num);
        buckets[index].max = Math.max(buckets[index].max, num);
    }

    let maxGap = 0;
    let prevMax = min;

    for (let bucket of buckets) {
        if (bucket.min === Infinity) continue;

        maxGap = Math.max(maxGap, bucket.min - prevMax);
        prevMax = bucket.max;
    }

    return maxGap;
};