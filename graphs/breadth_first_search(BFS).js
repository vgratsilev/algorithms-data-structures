/**
 * Поиск в ширину
 *
 * Добавляем в очередь ближайших соседей у узла
 * Достаем первый элемент из очереди и добавляем его соседей в очередь
 *
 * Реализация через очередь
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

function bfs(graph, start, end) {
    let queue = [start];

    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }
        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]];
        }
    }

    return false;
}

console.log(bfs(graph, 'a', 'g'));

const graph2 = {
    a: ['b', 'c'],
    b: ['e'],
    c: ['d', 'f'],
    d: ['e'],
    e: ['g'],
    f: ['e'],
    g: []
}

const bfs2 = (graph, start, end) => {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        const node = queue.shift();

        for (let neighbor of graph[node]) {
            if (neighbor === end) {
                return true;
            }

            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return false;
}

console.log(bfs2(graph2, 'a', 'g'));
