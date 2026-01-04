/**
 * Array
 * Get element O(1)
 * Add to start O(n)
 * Add to end O(1) or O(n)
 * Remove from end O(1)
 * Remove from start/by index O(n)
 * Search O(n)
 */

const arr = [7, 6, 1, 4, 0, 2, 3, 5, 8, 5];

/**
 * Packed array (плотные)
 * Элементы идут подряд одного типа: без пропусков
 */

const arr2 = [1, 10, 15, 2, 7, 9];

/**
 * Holey array (разреженный)
 * Элементы разного типа
 *
 * по сути работа с хэш таблицей
 * под элементы массива выделяется разное количество памяти
 */

const arr3 = [1, 'str', {}, [], true];
