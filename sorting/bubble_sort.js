/**
 * Time complexity O(n^2)
 * Space complexity O(1)
 */

const array = [ 0, 3, 4, 2, -1, 3, 6, 7, 13, -4, 45, 22, 53, 16 ];

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j + 1] < array[j]) {
                [ array[j + 1], array[j] ] = [ array[j], array[j + 1] ];
            }
        }
    }
    return array;
}

console.log(bubbleSort(array));
