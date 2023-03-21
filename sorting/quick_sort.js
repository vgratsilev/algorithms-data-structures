/**
 * Time complexity O(n * log n)
 * Space complexity O(n * log n)
 */

const array = [ 0, 3, 4, 2, -1, 3, 6, 7, 13, -4, 45, 22, 53, 16 ];

function quickSort(array) {
    if(array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for(let i = 0; i < array.length; i++) {
        if(i === pivotIndex) {
            continue;
        } else if(array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return [ ...quickSort(less), pivot, ...quickSort(greater) ];
}

console.log(quickSort(array));
