class Node {
    constructor(value) {
        this.value = value;
        this.color = "RED";
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            this.root.color = "BLACK";
            return;
        }

        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                if(!currentNode.left){
                    currentNode.left = newNode;
                    newNode.parent = currentNode;
                    break;
                }
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                if(!currentNode.right){
                    currentNode.right = newNode;
                    newNode.parent = currentNode;
                    break;
                }
                currentNode = currentNode.right;
            } else {
                return;
            }
        }

        this.fixViolations(newNode);
    }

    fixViolations(node){
        if(node.parent.color === "BLACK"){
            return;
        }
    }
}