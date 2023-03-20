/**
 * For sorted array
 * Time complexity O(log n)
 */

const array = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 29 ];

function binarySearch(array, item) {
    let start = 0;
    let end = array.length - 1;
    let middle;
    let found = false;

    while(found === false && start <= end) {
        middle = Math.floor((end + start) / 2);
        if(array[middle] === item) {
            return middle;
        } else if(item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return null;
}

console.log(binarySearch(array, 5));
console.log(binarySearch(array, 2));
console.log(binarySearch(array, 29));
