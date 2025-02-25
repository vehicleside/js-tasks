class A {
    constructor() {}

    arrFunc = () => {
        console.log("wtf", this === i)
    }
}

var i = new A();
i.arrFunc(); // wtf true, так как вызывается свойство класса с выводом в консоль wtf и строгим сравнением созданного экземпляра i равному этому же экземпляру this

console.log(i.hasOwnProperty("arrFunc")); // у экземпляра класса A() есть свойство arrFunc поэтому true
