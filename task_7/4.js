function F() {
  // тело функции
}

const x = {}

F.prototype =  x; //что тут происходит? зачем? объект x добавляется в прототип функции F

const a = new F();

console.log(a.__proto__ === x) // сравнивается поле __proto__ (указывает на F.prototype) с объектом x ранее добавленным в F.prototype true
