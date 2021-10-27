class Cola{
    constructor(){
        this.cola = [];
    }

    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }
    size(){
    return this.queue.length;
    }
    print(){
        return this.queue;
    }

}

const cola = new Cola();
console.log(cola.enqueue("Persona1"));
console.log(cola.enqueue("Persona1"));
console.log(cola.peek());
console.log(cola.size());
console.log(cola.print());