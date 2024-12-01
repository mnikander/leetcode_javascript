/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            if (sum == target) {
                return [i, j];
            }
        }
    }
};

let r1 = twoSum([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41], 42);
console.log(r1[0] + " " + r1[1]);

let r2 = twoSum([2, 1, 11, 7, 5, 3], 4)
console.log(r2[0] + " " + r2[1]);
