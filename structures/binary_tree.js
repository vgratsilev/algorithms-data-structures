/**
 * Binary Tree
 * Insert/Remove  O(log n)
 * Search O(log n)
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.size = 0;
        this.root = null;
    }

    add(value) {
        if(this.root === null) {
            this.root = new TreeNode(value);
            this.size += 1;
            return true;
        }

        let treeNode = this.root;
        const newNode = new TreeNode(value);

        while(treeNode) {
            if(value <= treeNode.value) {
                if(!treeNode.left) {
                    break;
                }
                treeNode = treeNode.left;
            } else {
                if(!treeNode.right) {
                    break;
                }
                treeNode = treeNode.right;
            }
        }

        if(treeNode.value <= value) {
            treeNode.right = newNode;
        } else {
            treeNode.left = newNode;
        }
        return true;
    }

    print(root = this.root) {
        if(!root) {
            return true;
        }
        console.log(root.value);
        this.print(root.left);
        this.print(root.right);
    }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(2);
tree.add(6);
tree.add(2);
tree.add(1);

tree.print();
