/**
 * Поиск кратчайшего пути (для взвешенных графов)
 * Dijkstra shortest path - find the shortest paths from the source to all vertices in the given graph.
 * V = count of vertices
 * E - count of edges
 * Time complexity O(V * V)
 * Space complexity O(V)
 */

const graph = {};
graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 2};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

const infinite = 1000000;

function shortestPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbors = {};

    Object.keys(graph).forEach((node) => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || infinite;
        }
    });

    let node = findNodeLowestCost(costs, processed);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach((neighbor) => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }
    return costs;
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = infinite;
    let lowestNode;

    Object.keys(costs).forEach((node) => {
        let cost = costs[node];

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });

    return lowestNode;
}

console.log(shortestPath(graph, 'a', 'g'));


/**
 *
 */

const dijkstra = (graph, start) => {
    const distances = {};
    const visited = new Set();
    const prev = {}; // путь тут храним

    for (const vertex in graph) {
        distances[vertex] = Infinity;
        prev[vertex] = null;
    }
    distances[start] = 0;

    while (visited.size < Object.keys(graph).length) {
        let closestVertex = null;
        let smallestDistance = Infinity;

        for (const vertex in distances) {
            if (!visited.has(vertex) && distances[vertex] < smallestDistance) {
                closestVertex = vertex;
                smallestDistance = distances[vertex];
            }
        }

        if (closestVertex === null) {
            break;
        }

        visited.add(closestVertex);

        for (const neighbor in graph[closestVertex]) {
            const weight = graph[closestVertex][neighbor];
            const newWeight = distances[closestVertex] + weight;

            if (newWeight < distances[neighbor]) {
                distances[neighbor] = newWeight;
                prev[neighbor] = closestVertex;
            }
        }
    }

    return {distances, prev};
}

const graph2 = {
    a: {b: 3, c: 1},
    b: {e: 6},
    c: {d: 2, f: 9},
    d: {e: 3},
    e: {g: 4},
    f: {e: 12},
    g: {}
};

console.log(dijkstra(graph2, 'a'));
