class Stack {
    values = []
    
    push(val) {
        this.values.push(val)
    }
    
    pop() {
        return this.values.pop()
    }
    
    peek() {
        return this.values.at(-1)
    }
    
    isEmpty() {
        return this.values.length == 0
    }
    
    size() {
        return this.values.length
    }
}

stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()) // 3

stack.pop()

console.log(stack.peek()) // 2

stack.pop()
stack.pop()

console.log(stack.isEmpty()) // true
