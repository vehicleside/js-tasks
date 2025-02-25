// Private field using classes

class Fun {
    #field;

    constructor() { }
    
    setField = function(field) {
        this.field = field
    }
    
    getField = function() {
        return this.field
    }
}

let obj = new Fun();
console.log(obj.field); // undefined
obj.setField("text")
console.log(obj.getField()) // text

// Private field using function constructor

const Person = (() => {
    const names = new WeakMap();
    function Person(name) {
        names.set(this, name);
    }
    Person.prototype.getName = function getName() {
        return names.get(this);
    }
    return Person;
})();

let sam = new Person("Sam");
console.log(sam.name) // undefined
console.log(sam.getName()) // Sam


