class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }

    add(value){
        if(this.value === null){
            this.value = value;
            return;
        }

        if(this.value < value){
            if(this.right){
                this.right.add(value);
                return;
            }
            const newNode = new Node(value);
            newNode.parent = this;
            this.right = newNode;
            return;
        }

        if(this.value > value){
            if(this.left){
                this.left.add(value);
                return;
            }
            const newNode = new Node(value);
            newNode.parent = this;
            this.left = newNode;
            return;
        }
    }

    remove(value){
        const identifiedNode = this.find(value);

        if(!identifiedNode){
            throw new Error("Could not find node with that value");
        }

        if(!identifiedNode.left && !identifiedNode.right){
            const identifiedParent = identifiedNode.parent;
            identifiedParent.removeChild(identifiedNode);
            return;
        }

        if(identifiedNode.left && identifiedNode.right){
            // Node should be replace by either highest value of left subtree or lowest value of right subtree
            // // Lowest Value of Right Subtree
            // const nextBiggerNode = identifiedNode.right.findNextBiggerNode();
            // if(nextBiggerNode.value !== identifiedNode.right.value){
            //     this.remove(nextBiggerNode.value);
            //     identifiedNode.value = nextBiggerNode.value;
            // } else {
            //     identifiedNode.value = identifiedNode.right.value;
            //     identifiedNode.right = identifiedNode.right.right;
            // }
        
            // Highest Value of Left Subtree
            const nextSmallerNode = identifiedNode.left.findNextSmallerNode();
            if(nextSmallerNode.value !== identifiedNode.left.value){
                this.remove(nextSmallerNode.value);
                identifiedNode.value = nextSmallerNode.value;
            } else {
                identifiedNode.value = identifiedNode.left.value;
                identifiedNode.left = identifiedNode.left.left;
            }
        } else {
            const childNode = identifiedNode.left || identifiedNode.right;
            identifiedNode.left = childNode.left;
            identifiedNode.right = childNode.right;
            identifiedNode.value = childNode.value;
        }

        if(identifiedNode.left){
            identifiedNode.left.parent = identifiedNode;
        }
        if(identifiedNode.right){
            identifiedNode.right.parent = identifiedNode;
        }
    }

    removeChild(node){
        if(this.left && this.left === node){
            this.left = null;
            return;
        }
        if(this.right && this.right === node){
            this.right = null;
            return;
        }
    }

    find(value){
        if(this.value === value){
            return this;
        }

        if(this.value < value && this.right){
            return this.right.find(value);
        }

        if(this.value > value && this.left){
            return this.left.find(value);
        }
    }

    findNextBiggerNode(){
        if(!this.left){
            return this;
        }

        return this.left.findNextBiggerNode();
    }

    findNextSmallerNode(){
        if(!this.right){
            return this;
        }
        
        return this.right.findNextSmallerNode();
    }

    preOrderTraversal(node, result){
        if(node !== null){
            result.push(node.value);
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    inOrderTraversal(node, result){
        if(node !== null){
            this.preOrderTraversal(node.left, result);
            result.push(node.value);
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }

    postOrderTraversal(node, result){
        if(node !== null){
            this.preOrderTraversal(node.left, result);
            this.preOrderTraversal(node.right, result);
            result.push(node.value);
        }
        return result;
    }

    levelOrderTraversal(){
        const result = [];
        const queue = [];

        if(this !== null){
            queue.push(this);
        }

        while(queue.length){
            const node = queue.shift();
            result.push(node.value);

            if(node.left !== null){
                queue.push(node.left);
            }
            if(node.right !== null){
                queue.push(node.right);
            }
        }

        return result;
    }
}

class Tree{
    constructor(){
        this.root = new Node(null);
    }

    add(value){
        this.root.add(value);
    }

    remove(value){
        this.root.remove(value);
    }

    find(value){
        return this.root.find(value);
    }

    preOrderTraversal(){
        return this.root.preOrderTraversal(this.root, []);
    }

    inOrderTraversal(){
        return this.root.inOrderTraversal(this.root, []);
    }

    postOrderTraversal(){
        return this.root.postOrderTraversal(this.root, []);
    }

    levelOrderTraversal(){
        return this.root.levelOrderTraversal();
    }
}

const tree = new Tree();
tree.add(10);
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(20);
tree.add(25);
tree.add(23);
tree.add(21);
tree.add(15);
tree.add(28);
tree.add(27);
tree.add(31);
tree.add(26);
tree.add(39);
// tree.remove(39);
// // tree.remove(20);
// tree.remove(25);
tree.remove(10);

// console.log(tree);
// console.log(tree.find(6));
// console.log(tree.find(7));
// console.log(tree.find(39));

console.log(tree.preOrderTraversal());
console.log(tree.inOrderTraversal());
console.log(tree.postOrderTraversal());
console.log(tree.levelOrderTraversal());
