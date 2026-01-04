/**
 * Time complexity O(n * log n) is average, O(n^2) in worst
 * Space complexity O(log n)
 */

const array = [0, 3, 4, 2, -1, 3, 6, 7, 13, -4, 45, 22, 53, 16];

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) {
            continue;
        } else if (array[i] < pivot) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));


function partition(array, left, right) {
    let pivotIndex = Math.floor((left + right) / 2);
    const pivot = array[pivotIndex];
    let i = left - 1;
    let j = right + 1;

    while (true) {
        do {
            i++;
        } while (array[i] < pivot);

        do {
            j--;
        } while (array[j] > pivot);

        if (i > j) return j;

        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * С двумя указателями, без создания массиов
 */
function quickSort2(array, left = 0, right = array.length - 1) {
    if (left >= right) {
        return;
    }

    const pivotIndex = partition(array, left, right);
    quickSort2(array, left, pivotIndex);
    quickSort(array, pivotIndex + 1, right);
}
