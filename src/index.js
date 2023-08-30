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

class Node {
    constructor(col, row) {
        this.coords = [col, row]
        this.neighbouringMoves = []
        this.partOfChain = false;
        if (col+2 < 8 && row+1 < 8) this.neighbouringMoves.push([col+2, row+1])
        if (col+1 < 8 && row+2 < 8) this.neighbouringMoves.push([col+1, row+2])
        if (col-1 >=0 && row+2 < 8) this.neighbouringMoves.push([col-1, row+2])
        if (col-2 >=0 && row+1 < 8) this.neighbouringMoves.push([col-2, row+1])
        if (col-2 >=0 && row-1 >=0) this.neighbouringMoves.push([col-2, row-1])
        if (col-1 >=0 && row-2 >=0) this.neighbouringMoves.push([col-1, row-2])
        if (col+1 < 8 && row-2 >=0) this.neighbouringMoves.push([col+1, row-2])
        if (col+2 < 8 && row-1 >=0) this.neighbouringMoves.push([col+2, row-1])

    }
}

let vertices = []
let sideLength = 8
// this populates the vertices array with coordinates of the chessboard
for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
        let newNode = new Node(i, j)
        vertices.push(newNode)
    }
}

function getNodeFromList(position, list) {
    for (node of list) {
        if (JSON.stringify(position) === JSON.stringify(node.coords))
        return node;
    }
}

function knightMoves(start, end) {
    // function recursiveBuildTree(position, end, visited=[start], queue=[], accessed=[start]) {
    function recursiveBuildTree(position, end, queue=[], accessed=[start]) {
        let node = getNodeFromList(position, vertices)
        let shortestPath = `${JSON.stringify(position)}`;
        accessed.push(position)

        // check if current move leads to the end position
        for (v of node.neighbouringMoves) {
            if (JSON.stringify(v) === JSON.stringify(end)) {
                // do some stuff required to check if path can be added
                // i'm not sure i even need the visited array
                // visited.push(end)
                // i'm not convinced that this does what i expect... these don't have that property. i need to get the node
                // so here, i'm making the chain true
                node.partOfChain = true;
                // start building the chain
                shortestPath += ` ${JSON.stringify(v)}`
                return shortestPath;
            }
        }

        // else, add all moves (not already made) to queue and visited 
        for (v of node.neighbouringMoves) {
            // test if the move has been made already (in visited array)
            // if (!isArrayInArray(visited, v)) {
            //     visited.push(v)
                queue.push(v)
            // }
        }

        // get the position at the start of the queue
        let nextNeighbour = queue[0];
        queue.shift()
        // store reference to future return values
        let recursivePath = '';
        //recursive path will first return the end position and the previous node. it will also change the previous node
        //  recursivePath += recursiveBuildTree(nextNeighbour, end, visited, queue, accessed)
         recursivePath += recursiveBuildTree(nextNeighbour, end, queue, accessed)

         // this is the end game

         // now, recursive path is used to add to chain
        if (recursivePath.includes(JSON.stringify(end))) {
            // check the neighbouring moves once more
            for (v of node.neighbouringMoves) {
                
                let checkNodeIsPartOfChain = getNodeFromList(v,vertices)

                // this should find the previous value; what do i want to do with it? 
                // if (isArrayInArray(visited, v) && v.partOfChain === true) {
                
                // maybe i need to get the nodes.... like node = getNodeFromList(v)
                // if 

                //does this still hold?
                if (isArrayInArray(accessed, v)
                 && checkNodeIsPartOfChain.partOfChain === true
                )
                 {
                    node.partOfChain = true;
                    recursivePath = JSON.stringify(position) + recursivePath;
                    return recursivePath;
                }
            }
            return '' + recursivePath;
        }
    }
    return recursiveBuildTree(start, end)
}

console.log(
// knightMoves([3,3], [0,0])
// knightMoves([4,3], [0,0])
knightMoves([0,0], [3,3])
)