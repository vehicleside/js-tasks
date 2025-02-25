function Hamster() {
    this.food = []
}

Hamster.prototype.found = function(something) {
    this.food.push(something);
}

speedy = new Hamster();
lazy = new Hamster();

speedy.found("apple");
speedy.found("nut");

function log(text) {
    return console.log(text);
}

log(speedy.food) // ["apple", "nut"]
log(lazy.food) // []

// Чтобы поправить нужно перенести поле food и метод found в тело класса



