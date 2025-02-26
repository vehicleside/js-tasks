console.log("1");

setTimeout(() => console.log("2"), 1);

let promise = new Promise((resolve) => {
    console.log("3");
    resolve();
});

promise.then(() => console.log("4"));

setTimeout(() => console.log("5"));

console.log("6");

// 136425 | 136452 for browser
