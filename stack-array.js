class MinStack {
    constructor() {
        this.items = [];
        this.minStack = [];
    }

    push(value){
        // Just Change the < to > for Max Stack
        if(this.minStack.length === 0 || value < this.minStack[this.minStack.length - 1]){
            this.minStack.push(value);
        }
        this.items.push(value);
    }

    pop(){
        const poppedItem = this.items.pop();
        if(this.minStack[this.minStack.length - 1] === poppedItem){
            this.minStack.pop();
        }
        return poppedItem;
    }

    isEmpty(){
        return this.items.length === 0;
    }

    toArray(){
        return this.items.slice();
    }

    getMin(){
        return this.minStack[this.minStack.length - 1];
    }
}

const stack = new MinStack();

// stack.push('Cook Dinner');
// stack.push('Wash the Dishes');
// stack.push('Buy the ingredients');
stack.push(4);
stack.push(7);
stack.push(9);
stack.push(1);
stack.push(5);

console.log(stack.toArray());
console.log(stack.getMin());

console.log(stack.pop());

console.log(stack.toArray());
console.log(stack.getMin());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.toArray());
console.log(stack.getMin());

console.log(stack.pop());
console.log(stack.toArray());
console.log(stack.getMin());

