/**
 * V = count of vertices
 * E - count of edges
 * Time complexity O(V + E)
 * Space complexity O(V)
 */

const graph = {};
graph.a = [ 'b', 'c' ];
graph.b = [ 'f' ];
graph.c = [ 'd', 'e' ];
graph.d = [ 'f' ];
graph.e = [ 'f' ];
graph.f = [ 'g' ];

function dfs(graph, start, end, visited) {
    if(start === end) {
        return true;
    }

    if(!visited) {
        visited = new Set();
    }

    if(visited.has(start) || !graph[start]) {
        return false;
    }

    visited.add(start);

    for(let neighbor of graph[start]) {
        if(!visited.has(neighbor)) {
            let reached = dfs(graph, neighbor, end, visited);

            if(reached) {
                return true;
            }
        }
    }

    return false;
}

console.log(dfs(graph, 'a', 'g'));
