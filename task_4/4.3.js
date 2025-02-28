class Queue {
    queue = []
    
    enqueue(val) {
        this.queue.push(val)
    }
    
    dequeue() {
        return this.queue.shift()
    }
    
}


