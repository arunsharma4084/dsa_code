class Node {
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    insert(value, priority) {
        const newNode = new Node(value, priority);
        this.elements.push(newNode);

        let currentElementIndex = this.elements.length - 1;
        let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;

        while(parentElementIndex >= 0 && this.elements[currentElementIndex].priority > this.elements[parentElementIndex].priority){
            const parentElement = this.elements[parentElementIndex];
            this.elements[parentElementIndex] = newNode;
            this.elements[currentElementIndex] = parentElement;
            currentElementIndex = parentElementIndex;
            parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1;
        }
    }

    process(){
        if(this.elements.length === 0){
            return null;
        }

        if(this.elements.length === 1){
            return this.elements.pop();
        }
        const topElement = this.elements[0];

        this.elements[0] = this.elements.pop();

        let currentElementIndex = 0;
        let leftChildIndex = 2 * currentElementIndex + 1;
        let rightChildIndex = 2 * currentElementIndex + 2;
        let childElementIndex = this.elements[rightChildIndex] && this.elements[rightChildIndex].priority >= this.elements[leftChildIndex].priority ? rightChildIndex : leftChildIndex;
        
        if(this.elements[childElementIndex] && this.elements[currentElementIndex].priority < this.elements[childElementIndex].priority){
            const currentNode = this.elements[currentElementIndex];
            const currentChildNode = this.elements[childElementIndex];
            this.elements[childElementIndex] = currentNode;
            this.elements[currentElementIndex] = currentChildNode;
        }

        return topElement;
    }
}

const queue = new PriorityQueue();

queue.insert('Clean my room', 1);
queue.insert('Do taxes', 53);
queue.insert('Learn to code', 99);

console.log(queue.process());

console.log(queue);
