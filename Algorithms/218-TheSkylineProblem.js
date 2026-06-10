/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    let events = [];

    // Step 1: Create events
    for (let [l, r, h] of buildings) {
        events.push([l, -h]); // start
        events.push([r, h]);  // end
    }

    // Step 2: Sort events
    events.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    // Max heap using array (simple simulation)
    let heights = [0];
    let result = [];
    let prevMax = 0;

    for (let [x, h] of events) {
        if (h < 0) {
            // start → add height
            heights.push(-h);
        } else {
            // end → remove height
            let index = heights.indexOf(h);
            heights.splice(index, 1);
        }

        // get current max height
        let currentMax = Math.max(...heights);

        if (currentMax !== prevMax) {
            result.push([x, currentMax]);
            prevMax = currentMax;
        }
    }

    return result;
};