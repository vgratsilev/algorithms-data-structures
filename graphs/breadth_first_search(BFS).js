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

function bfs(graph, start, end) {
    let queue = [ start ];

    while(queue.length > 0) {
        const current = queue.shift();
        if(!graph[current]) {
            graph[current] = [];
        }
        if(graph[current].includes(end)) {
            return true;
        } else {
            queue = [ ...queue, ...graph[current] ];
        }
    }

    return false;
}

console.log(bfs(graph, 'a', 'g'));
