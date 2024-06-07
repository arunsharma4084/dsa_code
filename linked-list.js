export class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = {value: value, next: null};

        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if(!this.head){
            this.head = newNode;
        }
    }

    prepend(value){
        const newNode = {value: value, next: this.head};

        this.head = newNode;

        if(!this.tail){
            this.tail = newNode;
        }

    }

    insertAfter(value, afterValue){
        const existingNode = this.find(afterValue);

        if(existingNode){
            const newNode = {value: value, next: existingNode.next};
            existingNode.next = newNode;
        }
    }

    find(value){
        if(!this.head){
            throw new Error('Linked List is empty');
        }

        let currentNode = this.head;

        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }

    delete(value){
        if(!this.head){
            throw new Error('Linked List is empty');
        }

        while(this.head && this.head.value === value){
            this.head = this.head.next;
        }

        let currentNode = this.head;

        while(currentNode.next){
            if(currentNode.next.value === value){
                currentNode.next = currentNode.next.next;
            } else {
                currentNode = currentNode.next;
            }
        }

        if(this.tail.value === value){
            this.tail = currentNode;
        }
    }

    deleteHead(){
        if(!this.head){
            throw new Error('Linked List is empty');
        }

        const deletedItem = this.head;

        if(this.head.next){
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedItem;
    }

    toArray(){
        const elements = [];

        let currentNode = this.head;
        while(currentNode){
            elements.push(currentNode);
            currentNode = currentNode.next;
        }
        return elements;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('Hello there');
linkedList1.append('Arun');
linkedList1.append('Arun');
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend('First Value!');
linkedList1.prepend('First Value!');

console.log(linkedList1.toArray())

linkedList1.delete('Arun');
linkedList1.delete('First Value!');
linkedList1.delete(18.51);


console.log(linkedList1.toArray());
console.log(linkedList1.find('Arun'));
console.log(linkedList1.find("Hello there"));

linkedList1.insertAfter('new value - 1', 1);
linkedList1.insertAfter('new value - 2', 'Hello there');

console.log(linkedList1.toArray());