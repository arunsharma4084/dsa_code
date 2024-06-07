import { LinkedList } from "./linked-list";

class Stack {
    constructor(){
        this.list = new LinkedList();
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.deleteHead();
    }

    isEmpty(){
        return !this.list.head;
    }

    toArray(){
        this.list.toArray();
    }
}

const stack = new Stack();

stack.push('Cook Dinner');
stack.push('Wash the Dishes');
stack.push('Buy the ingredients');

console.log(stack.toArray());

console.log(stack.pop());

console.log(stack.toArray());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.toArray());