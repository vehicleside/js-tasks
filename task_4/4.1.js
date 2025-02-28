// Создайте массив чисел и найдите его сумму разными способами.

l_sum = require('lodash/sum');
l_max = require('lodash/max');
l_min = require('lodash/min');

function log(text) {
    console.log(text)
}

arr = [1, 3, 5, 6, -4]; // 11
 
 
// #1 for loop in function
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; ++i) {
        res += arr[i];
    }
    return res;
}
log(sum(arr));


// #2 reduce
log(arr.reduce((a, b) => a + b), 0)


// #3 via lodash
log(l_sum(arr))


// #4 forEach
total = 0;
arr.forEach(el => { total += el });
log(total);


// Создайте массив строк и объедините их в одну строку разными способами.

str_arr = ["som", "eth", "in", "g"] 


// #1 reduce
log(str_arr.reduce((a, b) => a + b))


// #2 join
log(str_arr.join(''))


// Найдите максимальный и минимальный элементы в массиве чисел разными способами.

// #1 lodash
log([l_min(arr), l_max(arr)])


// #2 Math
log([Math.min(...arr), Math.max(...arr)])
