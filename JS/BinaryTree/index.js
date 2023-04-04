
class binaryTreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class binaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new binaryTreeNode(value, null, null);

        if (this.head == null) {
            this.head = newNode;
        } else {
            this.insertNode(node, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.left === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    GetLength() {
        var length = 0;

        let currentNode = this.root;

        this.recursiveGetLength(length, length, 0);

        return length;
    }

    max(a, b) {
        if (a >= b) return a;
        else return b;
    }

    recursiveGetLength(currentNode, length, count) {
        count++;
        length = this.max(length, count);
        this.RecursiveGetLength(currentNode.left, length, count);
        this.RecursiveGetLength(currentNode.right, length, count);
    }

    recursiveChange(currentNode, value1, value2) {
        if (currentNode == null) return;

        if (currentNode.value == value1) {
            currentNode.value = value2;
        }
        this.recursiveChange(currentNode.left, value1, value2);
        this.recursiveChange(currentNode.right, value1, value2);
    }

    change(value1, value2) {
        let currentNode = this.root;
        this.recursiveChange(currentNode,value1, value2);
    }

    recursiveFind(currentNode, value) {
        if (currentNode == null) return;

        if (currentNode.value == value) {
            return currentNode;
        } else {
            this.recursiveChange(currentNode.left, value1, value2);
            this.recursiveChange(currentNode.right, value1, value2);
        }
    }

    find(value) {
        let currentNode = this.root;

        return this.recursiveFind(currentNode, value);
    }

}