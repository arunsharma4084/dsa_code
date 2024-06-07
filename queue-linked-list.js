import { LinkedList } from "./linked-list";

class Queue {
    constructor(){
        this.list = new LinkedList();
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.deleteHead();
    }

    isEmpty(){
        return !this.list.head;
    }

    toArray(){
        this.list.toArray();
    }
}

const queue = new Queue();

queue.enqueue('Arun');
queue.enqueue('Chintu');
queue.enqueue('Govind');

console.log(queue.toArray());

console.log(queue.dequeue());

console.log(queue.toArray());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.toArray());