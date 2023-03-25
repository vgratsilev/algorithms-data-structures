/**
 * Linked list
 * Insert at start/remove at start  (or at end) O(1)
 * Insert/remove in somewhere O(n)
 * Search O(n)
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.root = null;
    }

    add(value) {
        if(this.size === 0) {
            this.root = new Node(value);
            this.size += 1;
            return true;
        }

        let node = this.root;

        while(node.next) {
            node = node.next;
        }

        node.next = new Node(value);
        this.size += 1;
        return true;
    }

    getSize() {
        return this.size;
    }

    print() {
        const result = [];
        let node = this.root;
        while(node) {
            result.push(node.value);
            node = node.next;
        }
        console.log(`List: ${result.length === 0 ? 'empty' : result}`);
    }
}

const list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
console.log('List size: ', list.getSize());
list.print();
