/**
 * Time complexity O(n^2)
 * Space complexity O(1)
 */

const array = [ 0, 3, 4, 2, -1, 3, 6, 7, 13, -4, 45, 22, 53, 16 ]

function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let indexMin = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        [ array[indexMin], array[i] ] = [ array[i], array[indexMin] ];
    }
    return array;
}

console.log(selectionSort(array))
