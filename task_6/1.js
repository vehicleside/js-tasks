Promise.reject("a")
    .catch((p) => p + "b")
    .catch((p) => p + "c")
    .then((p) => p + "d")
    .then((p) => p + "f")
    .catch((p) => p + "h")
    .finally((p) => p + "e")
    .then((p) => console.log(p));
    
// abdf
