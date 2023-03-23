const tree = require('./tree');

function leafSumRecursive(tree) {
    let sum = 0;

    tree.forEach((node) => {
        sum += node.v;

        if(node.c) {
            sum += leafSumRecursive(node.c);
        }
    });

    return sum;
}

console.log(leafSumRecursive(tree));

function leafSumIteration(tree) {
    let sum = 0;
    let stack = [ ...tree ];

    while(stack.length > 0) {
        const current = stack.shift();
        sum += current.v;

        if(current.c) {
            stack = [ ...stack, ...current.c ];
        }
    }

    return sum;
}

console.log(leafSumIteration(tree));
