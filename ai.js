class Node {
    constructor(data) {
        this.data = data;
        this.color = 'RED';
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.TNULL = new Node(null);
        this.TNULL.color = 'BLACK';
        this.root = this.TNULL;
    }

    // Preorder traversal
    preOrderHelper(node) {
        if (node !== this.TNULL) {
            console.log(node.data + " ");
            this.preOrderHelper(node.left);
            this.preOrderHelper(node.right);
        }
    }

    // Inorder traversal
    inOrderHelper(node) {
        if (node !== this.TNULL) {
            this.inOrderHelper(node.left);
            console.log(node.data + " ");
            this.inOrderHelper(node.right);
        }
    }

    // Post order traversal
    postOrderHelper(node) {
        if (node !== this.TNULL) {
            this.postOrderHelper(node.left);
            this.postOrderHelper(node.right);
            console.log(node.data + " ");
        }
    }

    // Search the tree
    searchTreeHelper(node, key) {
        if (node === this.TNULL || key === node.data) {
            return node;
        }

        if (key < node.data) {
            return this.searchTreeHelper(node.left, key);
        }
        return this.searchTreeHelper(node.right, key);
    }

    // Balance the tree after deletion of a node
    fixDelete(x) {
        let s;
        while (x !== this.root && x.color === 'BLACK') {
            if (x === x.parent.left) {
                s = x.parent.right;
                if (s.color === 'RED') {
                    s.color = 'BLACK';
                    x.parent.color = 'RED';
                    this.leftRotate(x.parent);
                    s = x.parent.right;
                }

                if (s.left.color === 'BLACK' && s.right.color === 'BLACK') {
                    s.color = 'RED';
                    x = x.parent;
                } else {
                    if (s.right.color === 'BLACK') {
                        s.left.color = 'BLACK';
                        s.color = 'RED';
                        this.rightRotate(s);
                        s = x.parent.right;
                    }

                    s.color = x.parent.color;
                    x.parent.color = 'BLACK';
                    s.right.color = 'BLACK';
                    this.leftRotate(x.parent);
                    x = this.root;
                }
            } else {
                s = x.parent.left;
                if (s.color === 'RED') {
                    s.color = 'BLACK';
                    x.parent.color = 'RED';
                    this.rightRotate(x.parent);
                    s = x.parent.left;
                }

                if (s.left.color === 'BLACK' && s.right.color === 'BLACK') {
                    s.color = 'RED';
                    x = x.parent;
                } else {
                    if (s.left.color === 'BLACK') {
                        s.right.color = 'BLACK';
                        s.color = 'RED';
                        this.leftRotate(s);
                        s = x.parent.left;
                    }

                    s.color = x.parent.color;
                    x.parent.color = 'BLACK';
                    s.left.color = 'BLACK';
                    this.rightRotate(x.parent);
                    x = this.root;
                }
            }
        }
        x.color = 'BLACK';
    }

    // Balance the tree after insertion of a node
    fixInsert(k) {
        let u;
        while (k.parent.color === 'RED') {
            if (k.parent === k.parent.parent.right) {
                u = k.parent.parent.left;
                if (u.color === 'RED') {
                    u.color = 'BLACK';
                    k.parent.color = 'BLACK';
                    k.parent.parent.color = 'RED';
                    k = k.parent.parent;
                } else {
                    if (k === k.parent.left) {
                        k = k.parent;
                        this.rightRotate(k);
                    }
                    k.parent.color = 'BLACK';
                    k.parent.parent.color = 'RED';
                    this.leftRotate(k.parent.parent);
                }
            } else {
                u = k.parent.parent.right;
                if (u.color === 'RED') {
                    u.color = 'BLACK';
                    k.parent.color = 'BLACK';
                    k.parent.parent.color = 'RED';
                    k = k.parent.parent;
                } else {
                    if (k === k.parent.right) {
                        k = k.parent;
                        this.leftRotate(k);
                    }
                    k.parent.color = 'BLACK';
                    k.parent.parent.color = 'RED';
                    this.rightRotate(k.parent.parent);
                }
            }
            if (k === this.root) {
                break;
            }
        }
        this.root.color = 'BLACK';
    }

    // Rotate left at node x
    leftRotate(x) {
        let y = x.right;
        x.right = y.left;
        if (y.left !== this.TNULL) {
            y.left.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.left) {
            x.parent.left = y;
        } else {
            x.parent.right = y;
        }
        y.left = x;
        x.parent = y;
    }

    // Rotate right at node x
    rightRotate(x) {
        let y = x.left;
        x.left = y.right;
        if (y.right !== this.TNULL) {
            y.right.parent = x;
        }
        y.parent = x.parent;
        if (x.parent === null) {
            this.root = y;
        } else if (x === x.parent.right) {
            x.parent.right = y;
        } else {
            x.parent.left = y;
        }
        y.right = x;
        x.parent = y;
    }

    // Insert the key to the tree in its appropriate position and fix the tree
    insert(key) {
        let node = new Node(key);
        node.parent = null;
        node.data = key;
        node.left = this.TNULL;
        node.right = this.TNULL;
        node.color = 'RED';

        let y = null;
        let x = this.root;

        while (x !== this.TNULL) {
            y = x;
            if (node.data < x.data) {
                x = x.left;
            } else {
                x = x.right;
            }
        }

        node.parent = y;
        if (y === null) {
            this.root = node;
        } else if (node.data < y.data) {
            y.left = node;
        } else {
            y.right = node;
        }

        if (node.parent === null) {
            node.color = 'BLACK';
            return;
        }

        if (node.parent.parent === null) {
            return;
        }

        this.fixInsert(node);
    }

    // Delete the node from the tree
    deleteNodeHelper(node, key) {
        let z = this.TNULL;
        let x, y;
        while (node !== this.TNULL) {
            if (node.data === key) {
                z = node;
            }

            if (node.data <= key) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        if (z === this.TNULL) {
            console.log("Couldn't find key in the tree");
            return;
        }

        y = z;
        let yOriginalColor = y.color;
        if (z.left === this.TNULL) {
            x = z.right;
            this.rbTransplant(z, z.right);
        } else if (z.right === this.TNULL) {
            x = z.left;
            this.rbTransplant(z, z.left);
        } else {
            y = this.minimum(z.right);
            yOriginalColor = y.color;
            x = y.right;
            if (y.parent === z) {
                x.parent = y;
            } else {
                this.rbTransplant(y, y.right);
                y.right = z.right;
                y.right.parent = y;
            }

            this.rbTransplant(z, y);
            y.left = z.left;
            y.left.parent = y;
            y.color = z.color;
        }
        if (yOriginalColor === 'BLACK') {
            this.fixDelete(x);
        }
    }

    // Transplant two nodes
    rbTransplant(u, v) {
        if (u.parent === null) {
            this.root = v;
        } else if (u === u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v;
        }
        v.parent = u.parent;
    }

    // Find the node with the minimum key
    minimum(node) {
        while (node.left !== this.TNULL) {
            node = node.left;
        }
        return node;
    }

    // Function to delete a node
    delete(key) {
        this.deleteNodeHelper(this.root, key);
    }

    // Function to search a key in the tree
    searchTree(key) {
        return this.searchTreeHelper(this.root, key);
    }

    // Function to print the tree in order
    inOrder() {
        this.inOrderHelper(this.root);
    }

    // Function to print the tree pre order
    preOrder() {
        this.preOrderHelper(this.root);
    }

    // Function to print the tree post order
    postOrder() {
        this.postOrderHelper(this.root);
    }
}

// Example usage:
let tree = new RedBlackTree();
tree.insert(20);
tree.insert(15);
tree.insert(25);
tree.insert(10);
tree.insert(5);

console.log("Inorder Traversal:");
tree.inOrder();

console.log("Preorder Traversal:");
tree.preOrder();

console.log("Postorder Traversal:");
tree.postOrder();

console.log("Search for 15:");
let node = tree.searchTree(15);
if (node !== tree.TNULL) {
    console.log("Node found:", node.data);
} else {
    console.log("Node not found");
}

console.log("Deleting 15:");
tree.delete(15);

console.log("Inorder Traversal after deletion:");
tree.inOrder();