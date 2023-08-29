//this really isn't working out for some reason... i'll either check out their way, or...
// may need adjacency list, venerate the graph rather than the tree

// what's wrong with me searching for what to do?
// i don't know what questions to ask... i'm blindfolded

// tests if an array is in another array. required, as coordinates are in arrays.
function isArrayInArray(array, item) {
    let result = array.find((el)=> {
        return JSON.stringify(el) === JSON.stringify(item)
    })
    return result != null;
}

// required to construct tree for recursive traversal

// let's try to replace the coordinates with nodes
class Node {
    constructor(col, row) {
        this.coords = [col, row]
        this.nextMoves = []
    }
}

// contains each position and their moves
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, [])
    }

    getVertex(col, row) {
        for (let [vertex, movesList] of this.AdjList) {
            if (col === vertex[0] && row === vertex[1]) {
                // return key
                return [vertex, movesList]
            }
        }
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
    }

    printGraph() {
        let getKeys = this.AdjList.keys();
        for (let i of getKeys) {
            let getValues = this.AdjList.get(i)
            let conc = "";
        }

        for (let j of getValues) conc += j + " ";
        console.log(i + " -> " + conc);
    }
}

let newGraph = new Graph(64);
let vertices = []
let sideLength = 8
// this populates the vertices array with coordinates of the chessboard
for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
        let newNode = new Node(i, j)
        // let coords = [i, j]
        // vertices.push(coords)
        vertices.push(newNode)
    }
}

// let's not use Graph... 
// add all these vertices, to inside the object
// for (v of vertices) {
//     newGraph.addVertex(v);
// }

// try to add the (up to ) 8 possible moves for each vertex
// for each of the 8 moves, test if out of bounds
// if not out of bounds, get the resulting vertex of the move, then add it to the moves list
for (v of vertices) {

    // urr
    // if (v[0]+2 < 8 && v[1]+1 < 8) {
    if (v.coords[0]+2 < 8 && v.coords[1]+1 < 8) {
        // let move = newGraph.getVertex(v[0]+2,v[1]+1)[0]
        v.nextMoves.push(v.coords[0]+2, v.coords[1]+1)
        // newGraph.addEdge(v, move)
    } 

    //uur
    // if (v[0]+1 < 8 && v[1]+2 < 8) {
    if (v.coords[0]+1 < 8 && v.coords[1]+2 < 8) {
        // let move = newGraph.getVertex(v[0]+1,v[1]+2)[0]
        // newGraph.addEdge(v, move)
        v.nextMoves.push(v.coords[0]+1, v.coords[1]+2)
    } 

    //uul
    // if (v[0]-1 >=0 && v[1]+2 < 8) {
    if (v.coords[0]-1 >=0 && v.coords[1]+2 < 8) {
        // let move = newGraph.getVertex(v[0]-1,v[1]+2)[0]
        // newGraph.addEdge(v, move)
        v.nextMoves.push(v.coords[0]-1, v.coords[1]+2)
    } 

    //ull
    // if (v[0]-2 >=0 && v[1]+1 < 8) {
    if (v.coords[0]-2 >=0 && v.coords[1]+1 < 8) {
        // let move = newGraph.getVertex(v[0]-2,v[1]+1)[0]
        // newGraph.addEdge(v, move)
        v.nextMoves.push(v.coords[0]-2, v.coords[1]+1)
    } 

    //dll
    // if (v[0]-2 >=0 && v[1]-1 >=0) {
    if (v.coords[0]-2 >=0 && v.coords[1]-1 >=0) {
        // let move = newGraph.getVertex(v[0]-2,v[1]-1)[0]
        // newGraph.addEdge(v, move)
        v.nextMoves.push(v.coords[0]-2, v.coords[1]-1)
    } 

    //ddl
    // if (v[0]-1 >=0 && v[1]-2 >=0) {
    if (v.coords[0]-1 >=0 && v.coords[1]-2 >=0) {
        // let move = newGraph.getVertex(v[0]-1,v[1]-2)[0]
        // newGraph.addEdge(v, move)
        v.nextMoves.push(v.coords[0]-1, v.coords[1]-2)
    } 

    //ddr
    // if (v[0]+1 < 8 && v[1]-2 >=0) {
    if (v.coords[0]+1 < 8 && v.coords[1]-2 >=0) {
        // let move = newGraph.getVertex(v[0]+1,v[1]-2)[0]
        // newGraph.addEdge(v, move)
        v.nextMoves.push(v.coords[0]+1, v.coords[1]-2)
    } 

    //drr
    // if (v[0]+2 < 8 && v[1]-1 >=0) {
    if (v.coords[0]+2 < 8 && v.coords[1]-1 >=0) {
        // let move = newGraph.getVertex(v[0]+2,v[1]-1)[0]
        // newGraph.addEdge(v, move)
        v.nextMoves.push(v.coords[0]+2, v.coords[1]-1)
    } 
}

// return when a certain position is reached. hmm, how do i build the counter and queue? what would it do?

// start and end are arrays representing coordinates
// add to an array for visited nodes
// add to an array for the queue?

// i'm sure i don't need a queue to go until it is length 0..., just need to stop when node is found
// is the queue flawed?
// how do i add the correct move first, and if it isn't there, add all of the things; i think i've done that
// but then how do i... only add the shortest path?
// OH SHIT is this where level order comes in? do i need to build a tree from this? how do i build a tree from these moves?
// okay, might 

function knightMoves(start, end) {

    function recursiveBuildTree(position, end, visited=[start], queue=[]) {
        let shortestPath = `${JSON.stringify(position)}`;
        // get neighbouring moves of current position; newGraph stores all positions and neighbouring moves for each position
        let moves = newGraph.getVertex(position[0],position[1])[1]
        // first, determine if any of these moves are the end position.
        for (v of moves) {
            // check if current move is the end position
            if (JSON.stringify(v) === JSON.stringify(end)) {
                visited.push(end)
                shortestPath += ` ${JSON.stringify(v)}`
                console.log(shortestPath)

                return shortestPath;
            }
        }

        // else, add all moves (not already made) to queue
        for (v of moves) {
            // test if the move has been made already (in visited array)
            if (!isArrayInArray(visited, v)) {
                visited.push(v)
                queue.push(v)
            }
        }

        // get the position at the start of the queue
        let nextVertex = queue[0];
        queue.shift()
        // call again
         let recursivePath = recursiveBuildTree(nextVertex, end, visited, queue)
         // if path eventually contains the end position, add to the chain
         if (recursivePath.includes(JSON.stringify(end))) {
            shortestPath += recursivePath
         }
        // return shortestPath;
        return '';
    }

    return recursiveBuildTree(start, end)
}

console.log(
knightMoves([3,3], [0,0])
// knightMoves([0,0], [3,3])
)