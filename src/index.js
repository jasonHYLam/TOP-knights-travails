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
        let coords = [i, j]
        vertices.push(coords)
    }
}

// add all these vertices, to inside the object
for (v of vertices) {
    newGraph.addVertex(v);
}

// try to add the (up to ) 8 possible moves for each vertex
// for each of the 8 moves, test if out of bounds
// if not out of bounds, get the resulting vertex of the move, then add it to the moves list
for (v of vertices) {

    // urr
    if (v[0]+2 < 8 && v[1]+1 < 8) {
        let move = newGraph.getVertex(v[0]+2,v[1]+1)[0]
        newGraph.addEdge(v, move)
    } 

    //uur
    if (v[0]+1 < 8 && v[1]+2 < 8) {
        let move = newGraph.getVertex(v[0]+1,v[1]+2)[0]
        newGraph.addEdge(v, move)
    } 

    //uul
    if (v[0]-1 >=0 && v[1]+2 < 8) {
        let move = newGraph.getVertex(v[0]-1,v[1]+2)[0]
        newGraph.addEdge(v, move)
    } 

    //ull
    if (v[0]-2 >=0 && v[1]+1 < 8) {
        let move = newGraph.getVertex(v[0]-2,v[1]+1)[0]
        newGraph.addEdge(v, move)
    } 

    //dll
    if (v[0]-2 >=0 && v[1]-1 >=0) {
        let move = newGraph.getVertex(v[0]-2,v[1]-1)[0]
        newGraph.addEdge(v, move)
    } 

    //ddl
    if (v[0]-1 >=0 && v[1]-2 >=0) {
        let move = newGraph.getVertex(v[0]-1,v[1]-2)[0]
        newGraph.addEdge(v, move)
    } 

    //ddr
    if (v[0]+1 < 8 && v[1]-2 >=0) {
        let move = newGraph.getVertex(v[0]+1,v[1]-2)[0]
        newGraph.addEdge(v, move)
    } 

    //drr
    if (v[0]+2 < 8 && v[1]-1 >=0) {
        let move = newGraph.getVertex(v[0]+2,v[1]-1)[0]
        newGraph.addEdge(v, move)
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

        // something strange is why doesn't the very first position get added?
        let recursivePath = `${JSON.stringify(position)}`;
        // console.log(recursivePath)
        let moves = newGraph.getVertex(position[0],position[1])[1]
        // console.log(moves)
        // first, determine if any of these moves are the end position.
        // if so, move it to moves and return
        for (v of moves) {
            if (JSON.stringify(v) === JSON.stringify(end)) {
                visited.push(end)
                recursivePath += ` ${JSON.stringify(v)}`
                console.log(recursivePath)

                return recursivePath;
            }
        }

        // else, add all moves (not already made) to the move's property
        for (v of moves) {
            // test if the move has been made already (in visited array)
            if (!isArrayInArray(visited, v)) {
                // get the corresponding vertex of the move, and add it to the queue 
                let moveVertex= newGraph.getVertex(v[0], v[1])[0]
                visited.push(moveVertex)
                queue.push(moveVertex)
            }
        }

        let nextVertex = queue[0];
        queue.shift()
        // never progresses past this point
        recursivePath += recursiveBuildTree(nextVertex, end, visited, queue)

        // i think this is NOW reached
        console.log(recursivePath)
        return recursiveBuildTree(nextVertex, end, visited, queue)
    }

    return recursiveBuildTree(start, end)
}


// knightMoves([0,2], [3,5])
// knightMoves([0,0], [3,3])
knightMoves([3,3], [0,0])