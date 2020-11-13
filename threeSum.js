/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums, target = 0) {
    let result = []

    if (nums.length < 3) {
        return result
    }

    nums = nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }

        let j = i + 1
        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) j++
                while (nums[k] === nums[k - 1]) k--

                j++
                k--
                continue
            } else if (sum < target) {
                j++
                continue
            } else {
                k--
                continue
            }
        }
    }
    return result
};