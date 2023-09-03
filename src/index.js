class Node {
    constructor(col, row) {
        this.coords = [col, row]
        this.neighbouringMoves = []
        this.previousPosition = null;
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

// this populates the vertices array with coordinates of the chessboard
let vertices = []
let sideLength = 8
for (let i = 0; i < sideLength; i++) {
    for (let j = 0; j < sideLength; j++) {
        let newNode = new Node(i, j)
        vertices.push(newNode)
    }
}

// tests if an array is in another array. required, as coordinates are in arrays.
function isArrayInArray(array, item) {
    let result = array.find((el)=> {
        return JSON.stringify(el) === JSON.stringify(item)
    })
    return result != null;
}

function getNodeFromList(position, list) {
    for (node of list) {
        if (JSON.stringify(position) === JSON.stringify(node.coords))
        return node;
    }
}

function knightMoves(start, end) {
    function recursiveBuildTree(position, end, queue=[], accessed=[]) {
        let currentNode = getNodeFromList(position, vertices)

        let previousPosition = currentNode.previousPosition
        let recursivePath = '';
        accessed.push(position)

        // check if current move leads to the end position
        for (v of currentNode.neighbouringMoves) {
            if (JSON.stringify(v) === JSON.stringify(end)) {
                // do some stuff required to check if path can be added
                accessed.push(end)
                // start building the chain
                recursivePath = `${JSON.stringify(position)}${JSON.stringify(v)}`
                // recursivePath is returned to build the chain
                // previousPosition is returned to check if the previous Position is reached
                return [recursivePath, previousPosition];
            }
        }

        // else, add all moves (not already made) to queue and accessed array
        for (v of currentNode.neighbouringMoves) {
            let neighbourNode = getNodeFromList(v, vertices)
            // important line: assigns current position to be the next positions' previous position
            // test if the move has been made already (in accessed array); if not, don't add to the queue
            if (!isArrayInArray(accessed, v)) {
                neighbourNode.previousPosition = position;
                accessed.push(v)
                queue.push(v)
            }
        }
        // get the position at the start of the queue
        let nextNeighbour = queue[0];
        queue.shift()
        let futureChain = null;
        [futureChain, previousPosition] = recursiveBuildTree(nextNeighbour, end, queue, accessed)
        recursivePath += futureChain

        // if position is equal to the first in the accessed array, then set it to previousPosition (used to add the previous move)
        if (JSON.stringify(position) === JSON.stringify(accessed[0])) {
            previousPosition = position;
        }

        // if current position is equal to the previous position, then add to the shortestPath, and get the next previous position
        if (previousPosition === position) {
            let previousNode = getNodeFromList(previousPosition, vertices)
            previousPosition = previousNode.previousPosition
            recursivePath = JSON.stringify(position) + recursivePath;
            return [recursivePath, previousPosition];
        }
        // else, don't add to shortestPath, and return the same previousPosition
        return ['' + recursivePath, previousPosition];
}
    return recursiveBuildTree(start, end)[0]
}

console.log(
knightMoves([0,0], [7,6])
)