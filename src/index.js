// this might be the wrong approach.
// need to be thinking of graphs, trees, nodes, and recursion, rather than placing stuff in a grid
// just need a starting point, within a graph?
// i need to understand recursion in a graph, first
    // then, i need to think about the list of steps like a tree

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

const root = new Node(2,2)

console.log(root)

const startingPosition = [2,2]

//position is an array of coordinates
function createGraph(position = startingPosition) {
    // how can i get reference to the very first root

    // base case; if out of bounds, then return?


    // like 
    if (node.col < 0 || node.col > 7 || node.row < 0 || node.row > 7) return null

    // const newNode = Node()
    // what do i do here
    // do i need a queue?

    // create 8 recursions
    // need to pass in array of coordinates
    // here, test if 
    node.uur = (position[0]+2 < 8 || position[1]+1 < 8) ? createGraph(position[0]+2, position[1]+1) : null
    node.urr = (position[0]+1 < 8 || position[1]+2 < 8) ? createGraph(position[0]+1, position[1]+2) : null
    node.drr = (position[0]-1 < 8 || position[1]+2 > 0) ? createGraph(position[0]-1, position[1]+2) : null
    node.ddr = (position[0]-1 < 8 || position[1]+1 > 0) ? createGraph(position[0]-1, position[1]+1) : null
    node.ddl = (position[0]-2 > 0 || position[1]-1 > 0) ? createGraph(position[0]-2, position[1]-1) : null
    node.dll = (position[0]-1 > 0 || position[1]-2 > 0) ? createGraph(position[0]-1, position[1]-2) : null
    node.ull = (position[0]+1 > 0 || position[1]-2 < 8) ? createGraph(position[0]+1, position[1]-2) : null
    node.uul = (position[0]+2 > 0 || position[1]-1 < 8) ? createGraph(position[0]+2, position[1]-1) : null
}

createGraph();

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