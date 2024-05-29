class Node {
    constructor(parentNode = null){
        this.children = [];
        this.parent = parentNode;
    }

    addNode(){
        // Add new node to children array
        this.children.push(new Node());
    }

    removeNode(index){}
}

class Tree {
    constructor(){
        this.root = new Node();
    }
}

