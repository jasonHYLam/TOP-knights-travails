//this really isn't working out for some reason... i'll either check out their way, or...
// may need adjacency list, venerate the graph rather than the tree

// what's wrong with me searching for what to do?
// i don't know what questions to ask... i'm blindfolded

class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, [])
    }

    getVertex(col, row) {
        for (let [key, value] of this.AdjList) {
            if (col === key[0] && row === key[1]) {
                // return key
                return [key, value]
            }
        }
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);
        // this.AdjList.get(w).push(v);
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


for (v of vertices) {
    // try to add the (up to ) 8 possible moves for each vertex
    // for each of the 8 moves, test if out of bounds
    // if not out of bounds, get the resulting vertex of the move, then add it to the moves list

    //urr
    // console.log(v)

    // why doesn't this work?
    //there should be an item that is equal to [2,2]
    if (v[0]+2 < 8 && v[1]+1 < 8) {
        let move = newGraph.getVertex(v[0]+2,v[1]+1)[0]
        console.log(move)
        // are there 2 edges added here?
        newGraph.addEdge(v, move)
    } 
    // if (v[0]+2 < 8 && v[1]+1 < 8) {
    //     let move = newGraph.getVertex(v[0]+2,v[1]+1)[0]
    //     console.log(move)
    //     newGraph.addEdge(v, move)
    // } 

    //uur
    // if (v[0]+1 < 8 && v[1]+2 < 8) {
    //     let move = newGraph.getVertex(v[0]+1,v[1]+2)[0]
    //     newGraph.addEdge(v, move)
    // } 

    //uul
    // if (v[0]-1 >=0 && v[1]+2 < 8) {
    //     let move = newGraph.getVertex(v[0]-1,v[1]+2)[0]
    //     newGraph.addEdge(v, move)
    // } 

    //ull
    // if (v[0]-2 >=0 && v[1]+1 < 8) {
    //     let move = newGraph.getVertex(v[0]-2,v[1]+1)[0]
    //     newGraph.addEdge(v, move)
    // } 

    //dll
    // if (v[0]-2 >=0 && v[1]-1 >=0) {
    //     let move = newGraph.getVertex(v[0]-2,v[1]-1)[0]
    //     newGraph.addEdge(v, move)
    // } 

    //ddl
    // if (v[0]-1 >=0 && v[1]-2 >=0) {
    //     let move = newGraph.getVertex(v[0]-1,v[1]-2)[0]
    //     newGraph.addEdge(v, move)
    // } 

    //ddr
    // if (v[0]+1 < 8 && v[1]-2 >=0) {
    //     let move = newGraph.getVertex(v[0]+1,v[1]-2)[0]
    //     newGraph.addEdge(v, move)
    // } 

    //drr
    // if (v[0]+2 < 8 && v[1]-1 >=0) {
    //     let move = newGraph.getVertex(v[0]+2,v[1]-1)[0]
    //     newGraph.addEdge(v, move)
    // } 
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
        if (node === end) {
            return
        } else {
            // these represent the node and its moves
            let [vertex, moves] = newGraph.getVertex(node[0], node[1])
            visited.push(vertex)
            queue.push(vertex)
            // while (queue.length !== 0) {
            //     for (v of moves) {
            //         // get the corresponding vertex of the move, and add it to the queue 
            //         let [vertex, moves] = newGraph.getVertex(v[0], v[1])
            //         // and recursively go into each one... 

            //     }
            // }
        }
        console.log(visited)
    }

    let [firstVertex, firstMoves] = newGraph.getVertex(start[0], start[1])
    return recursiveTraversal(firstVertex, end)
}

knightMoves([2,2], [6,6])


// this might be the wrong approach.
// need to be thinking of graphs, trees, nodes, and recursion, rather than placing stuff in a grid
// just need a starting point, within a graph?
// i need to understand recursion in a graph, first
    // then, i need to think about the list of steps like a tree

    // if (v[0]+2 < 8 && v[1]+1 < 8) newGraph.addEdge(v, [v[0]+2, v[1]+1])
    // if (v[0]+1 < 8 && v[1]+2 < 8) newGraph.addEdge(v, [v[0]+1, v[1]+2])
    // if (v[0]-1 >=0 && v[1]+2 < 8) newGraph.addEdge(v, [v[0]-1, v[1]+2])
    // if (v[0]-2 >=0 && v[1]+1 < 8) newGraph.addEdge(v, [v[0]-1, v[1]+1])

    // if (v[0]-2 >=0 && v[1]-1 >=0) newGraph.addEdge(v, [v[0]-2, v[1]-1])
    // if (v[0]-1 >=0 && v[1]-2 >=0) newGraph.addEdge(v, [v[0]-1, v[1]-2])
    // if (v[0]+1 < 8 && v[1]-2 >=0) newGraph.addEdge(v, [v[0]+1, v[1]-2])
    // if (v[0]+2 < 8 && v[1]-1 >=0) newGraph.addEdge(v, [v[0]+2, v[1]-1])

    //this should be like a tree

    // the warehouse

    // this.uur = (col+2 < 8 || row+1 < 8) ? new Node(col + 1, row + 2) : null
    // this.urr = (col+1 < 8 || row+2 < 8) ? new Node(col + 2, row + 1) : null
    // this.drr = (col-1 < 8 || row+2 > 0) ? new Node(col + 2, row - 1) : null
    // this.ddr = (col-1 < 8 || row+1 > 0) ? new Node(col + 1, row - 2) : null
    // this.ddl = (col-2 > 0 || row-1 > 0) ? new Node(col - 1, row - 2) : null
    // this.dll = (col-1 > 0 || row-2 > 0) ? new Node(col - 1, row - 2) : null
    // this.ull = (col+1 > 0 || row-2 < 8) ? new Node(col - 2, row + 1) : null
    // this.uul = (col+2 > 0 || row-1 < 8) ? new Node(col - 1, row + 2) : null

// do i need to create nodes...
class Node {
    constructor(col, row) {
        this.position = [col, row]
        this.col = col
        this.row = row

        this.uur = null
        this.urr = null
        this.drr = null
        this.ddr = null
        this.ddl = null
        this.dll = null
        this.ull = null
        this.uul = null

        // do i need to create 8 potential children?

        return this.position
    }
}

class moveGenerator {
    constructor() {
        //create function to generate moves
        // this.startingPosition = 
    }
}

// const root = new Node(2,2)

// console.log(root)

const startingPosition = [2,2]

// this doesn't work i think
//position is an array of coordinates
function createGraph(position = startingPosition) {
    const node = new Node(position[0], position[1])

    // what do i do here
    // do i need a queue?

    // create 8 recursions
    // need to pass in array of coordinates

    // i may have to delete child nodes. but... the issue is i need all of these

    // maybe can't do it this way
    node.uur = (position[0]+2 < 8 && position[1]+1 < 8) ? createGraph([position[0]+2, position[1]+1]) : null
    node.urr = (position[0]+1 < 8 && position[1]+2 < 8) ? createGraph([position[0]+1, position[1]+2]) : null
    node.drr = (position[0]-1 >= 0 && position[1]+2 < 8) ? createGraph([position[0]-1, position[1]+2]) : null
    node.ddr = (position[0]-2 > 0 && position[1]+1 < 8) ? createGraph([position[0]-1, position[1]+1]) : null

    node.ddl = (position[0]-2 >= 0 && position[1]-1 >= 0) ? createGraph([position[0]-2, position[1]-1]) : null
    node.dll = (position[0]-1 >= 0 && position[1]-2 >= 0) ? createGraph([position[0]-1, position[1]-2]) : null
    node.ull = (position[0]+1 < 8 && position[1]-2 >= 0) ? createGraph([position[0]+1, position[1]-2]) : null
    node.uul = (position[0]+2 < 8 && position[1]-1 >= 0) ? createGraph([position[0]+2, position[1]-1]) : null

    return node
}

// const graph = createGraph();
// console.log(graph)




// function startingPosition(col, row) {
//     if (col < 0 || col > 7 || row < 0 || row > 7) return

//     // what do i do now

// }

// function createPotentialMove(col, row, colShift, rowShift) {
//     if (colShift > 0) {
//         if (col+colShift < 8)
//     }

// }
// function listMoves(col, row) {
//     //possible moves

//     // do i push these to a queue? is listMoves a recursive function?
//     if (col+1 < 8 || row+2 < 8) col + 1, row + 2
//     if (col+1 < 8 || row+2 < 8) col + 2, row + 1
//     if (col+1 < 8 || row+2 > 0) col + 2, row - 1
//     if (col+1 < 8 || row+2 > 0) col + 1, row - 2
//     if (col+1 > 0 || row+2 > 0) col - 1, row - 2
//     if (col+1 > 0 || row+2 > 0) col - 1, row - 2
//     if (col+1 > 0 || row+2 < 8) col - 2, row + 1
//     if (col+1 > 0 || row+2 < 8) col - 1, row + 2

// }

// // make cell object / class
// class Cell {
//     constructor() {
//         this.visited = false 
//     }
// }

// function createGameBoard() {
//     let board = []
//     for (let i = 0; i < 8; i++) {

//         let row = []
//         board.push(row);
//         for (let j = 0; j < 8; j++) {
//             row.push(new Cell)
//         }
//     }

//     // does it make sense that row and column are in this order. isn't it 
//     // column, then row?
//     function placePiece(col, row) {
//         // so currently, the rows are inverted; they start from the top not the bottom
//         board[8 - row][col].visited = true
//     }

//     function getBoard() {
//         return board;
//     }

//     return {
//         placePiece,
//         getBoard,

//     };
// }


// // should there be a knight object? or should this be a gameController?
// function gameController() {
//     const newBoard = createGameBoard()
//     // this might be terrible code, i need to revisit building a house article
//     function setStartingPosition(col,row) {
//         newBoard.placePiece(col, row)
//         console.log(newBoard.getBoard())
//     }

//     // i need to set bounds... somehow... so knight doesn't move out of the grid
//     function listMoves(startingPosition) {


//         // ...
//     }

//     return {
//         setStartingPosition,
//     }
// }

// let game = gameController();
// game.setStartingPosition(1,4)
// function knightMoves() {

// }