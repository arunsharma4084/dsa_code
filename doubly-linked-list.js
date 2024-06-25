class ListNode {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    get(index){
        if(index < 0 || index >= this.size){ 
            return -1;
        }

        let cur = this.head;

        while(index != 0){
            cur = cur.next;
            index -= 1;
        }

        return cur.value;
    }

    addAtHead(value){
        const newNode = new ListNode(value);

        if(this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size += 1;
    }

    addAtTail(value){
        const newNode = new ListNode(value);

        if(this.size === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size += 1;
    }

    addAtIndex(value, index){
        if(index < 0 || index > this.size){ 
            return -1;
        }

        if(index === 0){
            this.addAtHead(value);
        } else if(index === this.size){
            this.addAtTail(value);
        } else {
            let cur = this.head;

            while(index-1 !== 0){
                cur = cur.next;
                index -= 1;
            }

            const newNode = new ListNode(value);
            newNode.next = cur.next;
            cur.next.prev = newNode;
            cur.next = newNode;
            newNode.prev = cur;
            this.size += 1;
        }
    }

    deleteAtIndex(index){
        if(index < 0 || index > this.size){ 
            return -1;
        }

        if(index === 0){
           let cur = this.head.next;
           if(cur){
            cur.prev = null;
           }

           this.head = this.head.next;
           this.size -= 1;

           if(this.size === 0){
            this.tail = null;
           }
        } else if(index = this.size - 1){
           let cur = this.tail.prev;
           if(cur){
            cur.next = null;
           }

           this.tail = this.tail.prev;
           this.size -= 1;

           if(this.size === 0){
            this.head = null;
           }
        } else {
            let cur = this.head;

            while(index-1 !== 0){
                cur = cur.next;
                index -= 1;
            }

            cur.next = cur.next.next;
            cur.next.prev = cur;
            this.size -= 1;
        }
    }

}

const linkedList1 = new DoublyLinkedList();
linkedList1.addAtTail(1);
linkedList1.addAtTail('Hello there');
linkedList1.addAtTail('Arun');
linkedList1.addAtTail('Sharma');
linkedList1.addAtIndex(23, 3);
linkedList1.addAtTail(18.51);
linkedList1.addAtHead('First Value!');
linkedList1.addAtHead('First First Value!');

console.log(linkedList1);