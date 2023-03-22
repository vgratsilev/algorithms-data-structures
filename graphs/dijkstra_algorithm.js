/**
 * Dijkstra shortest path - find the shortest paths from the source to all vertices in the given graph.
 * V = count of vertices
 * E - count of edges
 * Time complexity O(V * V)
 * Space complexity O(V)
 */

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

const infinite = 1000000;

function shortestPath(graph, start, end) {
    const costs = {};
    const processed = [];
    let neighbors = {};

    Object.keys(graph).forEach((node) => {
        if(node !== start) {
            let value = graph[start][node];
            costs[node] = value || infinite;
        }
    });

    let node = findNodeLowestCost(costs, processed);
    while(node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach((neighbor) => {
            let newCost = cost + neighbors[neighbor];
            if(newCost < costs[neighbor]) {
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

        if(cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });

    return lowestNode;
}

console.log(shortestPath(graph, 'a', 'g'));
