// find the number that is missing from the array.

var missingNumber = function (nums) { // [3,0,4,2] -- missingnumber is 1
    let arraylen = nums.length // arraylen = 4
    let seriesSum = (arraylen * (arraylen + 1)) / 2 // seriesSum = (4 *(4+1))/2 = 20/2 = 10
    let reduceSum = nums.reduce((a, b) => a + b, 0) // 3 + 0 + 4 + 2 = 9
    let missingNum = seriesSum - reduceSum // 10 - 9 = 1
    return missingNum // 1
};

missingNumber([3, 0, 4, 2])