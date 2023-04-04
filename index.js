
class doublyLinkedListNode {
    constructor(value, prev = null, next = null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    prepand(value) {
        const newNode = new doublyLinkedListNode(value, null, this.head);

        if (this.head != null) {
            this.head.prev = newNode;
        }

        this.head = newNode;

        if (this.tail == null) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new doublyLinkedListNode(value, null, null);

        if (this.tail != null) {
            this.tail.next = newNode;
        }

        newNode.prev = this.tail;

        this.tail = newNode;

        if (this.head == null) {
            this.head = newNode;
        }

        return this;
    }

    delete(value) {
        if (this.head == null) {
            return this;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode != null) {
            if (currentNode.value === value) {
                deletedNode = currentNode;

                if (deletedNode == this.head) {
                    this.head = deletedNode.next;

                    if (this.head != null) {
                        this.head.prev = null;
                    }

                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode == this.tail) {
                    this.tail = deletedNode.prev;

                    this.tail = next;
                } else {
                    const previoiusNode = deletedNode.prev;

                    const nextNode = deletedNode.next;

                    previoiusNode.next = nextNode;

                    nextNode.prev = previoiusNode
                }
            }
            currentNode = currentNode.next;
        }

        return deletedNode;
    }

    Set(value1, value2) {
        if (this.head == null) {
            return this;
        }

        let currentNode = this.head

        while (currentNode != null) {
            if (currentNode.value == value1) {
                currentNode.value = value2;
            }

            currentNode = currentNode.next;
        }

        return this;
    }

    GetLength() {
        if (this.head == null) {
            return 0;
        }

        let count = 0;
        let currentNode = this.head;

        while (currentNode != null) {
            count++;
            currentNode = currentNode.next;
        }

        return count;
    }
}