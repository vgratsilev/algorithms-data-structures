/**
 * Time complexity O(n * log n)
 * Space complexity O(n)
 */

const array = [ 0, 3, 4, 2, -1, 3, 6, 7, 13, -4, 45, 22, 53, 16 ];

function merge(arrLeft, arrRight) {
    const arrSort = [];
    let i = 0;
    let j = 0;

    while(i < arrLeft.length && j < arrRight.length) {
        arrSort.push((arrLeft[i] < arrRight[j]) ? arrLeft[i++] : arrRight[j++]);
    }

    return [ ...arrSort, ...arrLeft.slice(i), ...arrRight.slice(j) ];
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }

    let middleIndex = Math.floor(array.length / 2);
    const arrLeft = array.slice(0, middleIndex);
    const arrRight = array.slice(middleIndex);

    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

console.log(mergeSort(array));
