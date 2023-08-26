console.log('h')
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
// make a nested array of coordinates, using double for loop
let vertices = []
let sideLength = 8

// it's easier to write code than to read code

// this populates the vertices array
// should 'give' 64 coordinates



for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
        let coords = [i, j]
        vertices.push(coords)
    }
}



// add all these vertices, to inside the object
// add edge, using something... for each , add thje 8 corresponding, if they exist




for (v of vertices) {
    newGraph.addVertex(v);
}

    // try to add the (up to ) 8 possible moves for each vertex
    // for each of the 8 moves, test if out of bounds
    // if not out of bounds, get the resulting vertex of the move, then add it to the moves list
for (v of vertices) {

    // urr
    // console.log(v)

    // why doesn't this work?
    // there should be an item that is equal to [2,2]
    if (JSON.stringify(v) == JSON.stringify([2, 2])) {
        console.log(v)
    }

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






console.log(newGraph)

console.log(newGraph.getVertex(2,2))
console.log(newGraph.getVertex(4,3))








// the moves list has length 16, not 8
// i get 0,1 and 4,3 instead of 3,4

// TODO: now, traverse this bitch!
// return when a certain position is reached. hmm, how do i build the counter and queue? what would it do?
// they suggested level Order traversal. but how do i 'disregard' the 

// start and end are arrays representing coordinates

// add to an array for visited nodes
// add to an array for the queue?



function knightMoves(start, end) {

    function recursiveTraversal(node, end, visited=[], queue=[]) {
        // if the end position is reached, end 
        if (JSON.stringify(node) === JSON.stringify(end)) {
            return
        } else {
            // these represent the node and its moves
            let [vertex, moves] = newGraph.getVertex(node[0], node[1])

            visited.push(vertex)
            // surely i need to get the first of the queue at some point?
            for (v of moves) {
                // TEST IF IN VISITED!!!! VERY IMPORTANT
                // if (v )
                // get the corresponding vertex of the move, and add it to the queue 
                let [nextVertex, nextMoves] = newGraph.getVertex(v[0], v[1])[0]
                queue.push(nextVertex)
            }
            while (queue.length !== 0) {
                let nextVertex = queue[0]
                queue.shift();
                // and recursively go into each one... 
                //vertex is just the vertex, not the object containing vertex and nodes
                recursiveTraversal(nextVertex, end, visited, queue)
            }
        }
        console.log(visited)
    }

    let [firstVertex, firstMoves] = newGraph.getVertex(start[0], start[1])
    // return recursiveTraversal(firstVertex, end)
}

// knightMoves([2, 2], [6, 6])


console.log('j')

let testArray = [[1,1], [2,2], [3,3]]
if (testArray.includes[1,1]) {
    console.log('yes')
} else {
    console.log('no')
}

isArrayInArray(testArray, [1,1])