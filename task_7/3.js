Promise.resolve(1)
    .then((val) => {
        console.log(val); // в консоли 1, val = 2
        return val + 1;
    })
    .then((val) => {
        console.log(val); // в консоли 2, return undefined
    })
    .then((val) => {
        console.log(val); // в консоли undefined
        return Promise.resolve(3).then((val) => {
            console.log(val); // в консоли 3, return undefined
        });
    })
    .then((val) => {
        console.log(val); // в консоли undefined, return новый промис
        return Promise.reject(4);
    })
    .catch((val) => {
        console.log(val); // в консоли 4 т. к. reject, return undefined
    })
    .finally((val) => {
        console.log(val); // в консоли undefined выполнится в самом конце
        return 10;
    })
    .then((val) => {
        console.log(val); // в консоли undefined т. к. один catch отработал, return undefined
    });
    
// 1 2 undefined 3 undefined 4 undefined undefined
