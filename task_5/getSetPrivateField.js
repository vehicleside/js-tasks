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
