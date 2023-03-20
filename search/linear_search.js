/**
 * Time complexity O(n)
 */

const array = [ 1, 3, 4, 6, 7, 3, 2, 6, 8, 3, 7, 9, 2 ];

function linearSearch(array, item) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array, 5));
console.log(linearSearch(array, 2));
console.log(linearSearch(array, 6));
