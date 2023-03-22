/**
 * Time complexity O(n^2)
 * Space complexity O(1)
 */

const array = [ 0, 3, 4, 2, -1, 3, 6, 7, 13, -4, 45, 22, 53, 16 ];

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let j = i - 1;
        let current = array[i];
        while(j > -1 && current < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

console.log(insertionSort(array));
