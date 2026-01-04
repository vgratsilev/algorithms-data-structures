/**
 * Поиск в глубину
 *
 * Идем по вершинам от начальной, помечаем повещенные
 * Возвращаемся назад к первой вершине, у которой нет посещенного соседа - идем по той ветке
 *
 * Реализация через стек или через рекурсию
 *
 * V = count of vertices
 * E - count of edges
 * Time complexity O(V + E)
 * Space complexity O(V)
 */

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function dfs(graph, start, end, visited) {
    if (start === end) {
        return true;
    }

    if (!visited) {
        visited = new Set();
    }

    if (visited.has(start) || !graph[start]) {
        return false;
    }

    visited.add(start);

    for (let neighbor of graph[start]) {
        if (!visited.has(neighbor)) {
            let reached = dfs(graph, neighbor, end, visited);

            if (reached) {
                return true;
            }
        }
    }

    return false;
}

console.log(dfs(graph, 'a', 'g'));

const graph2 = {
    a: ['b', 'c'],
    b: ['e'],
    c: ['d', 'f'],
    d: ['e'],
    e: ['g'],
    f: ['e'],
    g: []
}
/**
 * Итеративная реализация
 */
const dfsIterative = (graph, start) => {
    const visited = new Set();
    const stack = [start];

    while (stack.length > 0) {
        const node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);
            // console.log(node)
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        }
    }
}

/**\
 * a
 * c
 * f
 * e
 * g
 * d
 * b
 */
console.log(dfsIterative(graph2, 'a'));

/**
 * рекурсивный
 */

const dfsReqursive = (graph, start, visited = new Set()) => {
    if (visited.has(start)) {
        return;
    }

    visited.add(start);

    for (let neighbor of graph[start]) {
        dfsReqursive(graph, neighbor, visited);
    }
}

console.log(dfsReqursive(graph2, 'a'));
