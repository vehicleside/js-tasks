var a = 1;
var b = 2;

(function() {
    var b = 3;
    a += b;
})();

console.log(a);  // 4
console.log(b);  // 2

// значение a меняется в функции IIFE
// b отображается из глобальной области видимости
