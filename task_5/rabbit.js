// #1

class Animal {

    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {

    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("white rabbit");
console.log(rabbit.name);

// #2

class Animal2 {

    constructor(name) {
        this.name = name;
    }
}

class Rabbit2 extends Animal2 {

    constructor(name) {
        super();
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit2 = new Rabbit2("white rabbit");
console.log(rabbit2.name);

// #3

class Animal3 {

    constructor(name) {
        this.name = name;
    }
    
    setName = function(name) {
        this.name = name;
    }
}

class Rabbit3 extends Animal3 {
    
    constructor(name) {
        super().setName(name);
        this.created = Date.now();
    }
}

let rabbit3 = new Rabbit3("white rabbit");
console.log(rabbit3.name);

// 4

class Animal4 {

    constructor(name) {
        this.name = name;
    }
}

class Rabbit4 extends Animal4 {

    constructor(name) {
        super().setName(name);
        this.created = Date.now();
    }
    
    setName = function(name) {
        this.name = name
    }
}

let rabbit4 = new Rabbit4("white rabbit");
console.log(rabbit4.name);
