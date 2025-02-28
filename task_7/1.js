// some

Array.prototype.someArr = function (callback) {
    for (let i = 0; i < this.length; ++i) {
        if (i in this && callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};


console.log([1, 2, 3, 4, 5].someArr(number => number === 5)); // true
console.log([1, 2, 3, 4, 5].someArr(number => number === 6)); // false

// map

Array.prototype.mapArr = function (callback, arg) {
    const arr = []
    for (let i = 0; i < this.length; ++i) {
        arr[i] = callback.call(arg, this[i], i, this)
    }
    return arr;
}

console.log([1, 3, 5, 7].mapArr((val) => val ** 2)) // [1, 9, 25, 49]
console.log([1, 3, 5, 7].mapArr((val) => val - 3)) // [-2, 0, 2, 4]

// reduce

Array.prototype.reduceArr = function(callback, prev) {
    for (let i = 0; i < this.length; ++i) {
        prev = callback(prev, this[i], i, this);
    }
    return prev
}

console.log([2, 4, 6, 0, -1].reduceArr((acc, curr) => acc + curr, 0)); // 11
