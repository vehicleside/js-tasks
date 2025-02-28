const obj = {
    child: {
        i:10,
        b:() => console.log(this.i, this),
        c() {
            console.log(this.i, this);
        },
    }
};

obj.child.b() // undefined {}
obj.child.c() // 10, { i:10, b: [Function b], c: [Function c] }
