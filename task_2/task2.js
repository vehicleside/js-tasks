// #1

let s1 = 'text_one'
var s2 = 'text' + 3
const s3 = 'text_four'

let n1 = 1
let n2 = Number(2)

let b1 = true
let b2 = Boolean(false)

let n = null

let undef = undefined

let ch1 = Symbol('char2')

let bigInt1 = 1n
let bigInt2 = BigInt(1)

arr = [s1, s2, s3,
       n1, n2,
       b1, b2,
       n, undef,
       ch1,
       bigInt1, bigInt2]

arr.forEach(el => console.log(typeof el))
console.log()

// #2

console.log( "B" + "a" + (1 - "hello")); // BaNaN
console.log((true && 3) + "d"); // 3d
console.log(Boolean(true && 3) + "d"); // 3d
console.log(NaN + 1) // NaN
console.log(NaN + 'o') // NaNo
console.log(undefined + 1) // NaN
console.log(undefined - 1) // NaN
console.log(null + 1) // 1
console.log(null / 5) // 0
console.log(5 / undefined) // NaN
console.log(-5 / null) // -Infinity
console.log(null == 0) // false
console.log(null == '') // false
console.log(null > 0) // false
console.log(null >= 0) // true
console.log(null == '') //  false
console.log('foo' + + 'bar') // fooNaN
console.log('11' + '1' - 1) // 110
console.log(typeof Object) // function
console.log(typeof Math) // object
console.log(new String('foo')=='foo') // true
console.log(new String('foo')==='foo') // false
