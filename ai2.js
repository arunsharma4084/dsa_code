class Node {
    constructor(data, color) {
        this.data = data;
        this.color = color; // Red: true, Black: false
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Left Rotate the tree
    leftRotate(node) {
        let rightChild = node.right;
        node.right = rightChild.left;
        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }
        rightChild.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }
        rightChild.left = node;
        node.parent = rightChild;
    }

    // Right Rotate the tree
    rightRotate(node) {
        let leftChild = node.left;
        node.left = leftChild.right;
        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }
        leftChild.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }
        leftChild.right = node;
        node.parent = leftChild;
    }

    // Insertion fix-up
    insertFixUp(node) {
        while (node !== this.root && node.parent.color === true) {
            if (node.parent === node.parent.parent.left) {
                let uncle = node.parent.parent.right;
                if (uncle !== null && uncle.color === true) {
                    node.parent.color = false;
                    uncle.color = false;
                    node.parent.parent.color = true;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.leftRotate(node);
                    }
                    node.parent.color = false;
                    node.parent.parent.color = true;
                    this.rightRotate(node.parent.parent);
                }
            } else {
                let uncle = node.parent.parent.left;
                if (uncle !== null && uncle.color === true) {
                    node.parent.color = false;
                    uncle.color = false;
                    node.parent.parent.color = true;
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rightRotate(node);
                    }
                    node.parent.color = false;
                    node.parent.parent.color = true;
                    this.leftRotate(node.parent.parent);
                }
            }
        }
        this.root.color = false;
    }

    // Insertion operation
    insert(data) {
        let newNode = new Node(data, true);
        let parent = null;
        let current = this.root;
        while (current !== null) {
            parent = current;
            if (newNode.data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        newNode.parent = parent;
        if (parent === null) {
            this.root = newNode;
        } else if (newNode.data < parent.data) {
            parent.left = newNode;
        } else {
            parent.right = newNode;
        }
        this.insertFixUp(newNode);
    }

    // Find the minimum node in the tree
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // Replace a node in the tree
    transplant(u, v) {
        if (u.parent === null) {
            this.root = v;
        } else if (u === u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v;
        }
        if (v !== null) {
            v.parent = u.parent;
        }
    }

    // Deletion fix-up
    deleteFixUp(node) {
        while (node !== this.root && node.color === false) {
            if (node === node.parent.left) {
                let sibling = node.parent.right;
                if (sibling.color === true) {
                    sibling.color = false;
                    node.parent.color = true;
                    this.leftRotate(node.parent);
                    sibling = node.parent.right;
                }
                if (sibling.left.color === false && sibling.right.color === false) {
                    sibling.color = true;
                    node = node.parent;
                } else {
                    if (sibling.right.color === false) {
                        sibling.left.color = false;
                        sibling.color = true;
                        this.rightRotate(sibling);
                        sibling = node.parent.right;
                    }
                    sibling.color = node.parent.color;
                    node.parent.color = false;
                    sibling.right.color = false;
                    this.leftRotate(node.parent);
                    node = this.root;
                }
            } else {
                let sibling = node.parent.left;
                if (sibling.color === true) {
                    sibling.color = false;
                    node.parent.color = true;
                    this.rightRotate(node.parent);
                    sibling = node.parent.left;
                }
                if (sibling.right.color === false && sibling.left.color === false) {
                    sibling.color = true;
                    node = node.parent;
                } else {
                    if (sibling.left.color === false) {
                        sibling.right.color = false;
                        sibling.color = true;
                        this.leftRotate(sibling);
                        sibling = node.parent.left;
                    }
                    sibling.color = node.parent.color;
                    node.parent.color = false;
                    sibling.left.color = false;
                    this.rightRotate(node.parent);
                    node = this.root;
                }
            }
        }
        node.color = false;
    }

    // Deletion operation
    deleteNode(data) {
        let z = this.searchNode(data);
        if (z === null) {
            console.log("Node not found!");
            return;
        }
        let y = z;
        let yOriginalColor = y.color;
        let x;
        if (z.left === null) {
            x = z.right;
            this.transplant(z, z.right);
        } else if (z.right === null) {
            x = z.left;
            this.transplant(z, z.left);
        } else {
            y = this.findMinNode(z.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent === z) {
                if (x !== null) {
                    x.parent = y;
                }
            } else {
                this.transplant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }
            this.transplant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }
        if (yOriginalColor === false) {
            this.deleteFixUp(x);
        }
    }

    // Search operation
    searchNode(data) {
        let current = this.root;
        while (current !== null) {
            if (data === current.data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }
}

// Example usage:
let tree = new RedBlackTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(18);
tree.insert(5);
tree.insert(12);
console.log("Initial Tree:");
console.log(tree);
tree.deleteNode(18);
console.log("Tree after deleting 18:");
console.log(tree);