arrayTotal = function(arr, target) {
    let ans = [];
    
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] + arr[j] === target) {
                ans.push(arr[i], arr[j]);
                return ans
            }
        }
    }

    return ans;
}


console.log(arrayTotal([1, 2, 3, 4, 5, 6, 7, 8, 9], 13)); // [4, 9]
