/**
 * Linked list
 * Insert at start/remove at start  (or at end) O(1)
 * Insert/remove in somewhere O(n): find O(n) + insert O(1)
 * Search O(n)
 * Get element at start/end O(1), in somewhere O(n)
 *
 * Плюсы:
 * Быстрая вставка/удаление
 * Динамический размер
 *
 * Минусы:
 * Медленный доступ к элементам
 * Дополнительная память на указатели
 *
 * Примеры использования:
 * История переходов или действий (word, браузер)
 * Реализация очереди/стека
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // для двусвязного списка
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.size += 1;
            return true;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.size += 1;

        return true;
    }

    prepend(value) {
    }

    remove(value) {
    }

    find(value) {
    }

    getSize() {
        return this.size;
    }

    print() {
        const result = [];
        let node = this.head;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        console.log(`List: ${result.length === 0 ? 'empty' : result}`);
    }
}

const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
console.log('List size: ', list.getSize());
list.print();
