class Stack {
    constructor() {
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        return this.items.pop();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    toArray(){
        return this.items.slice();
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

