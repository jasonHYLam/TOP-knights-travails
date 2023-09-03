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
        // this.partOfChain = false;
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
    // function recursiveBuildTree(position, end, queue=[], accessed=[], previousPosition=null) {
    function recursiveBuildTree(position, end, queue=[], accessed=[]) {
        let currentNode = getNodeFromList(position, vertices)

        // console.log('current position', position)
        let previousPosition = currentNode.previousPosition
        // console.log('previous position:', previousPosition)
        // console.log(' ')
        let recursivePath = '';
        accessed.push(position)

        // check if current move leads to the end position
        for (v of currentNode.neighbouringMoves) {
            if (JSON.stringify(v) === JSON.stringify(end)) {
                console.log('turning point reached')
                // do some stuff required to check if path can be added
                accessed.push(end)
                // currentNode.partOfChain = true;
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
            neighbourNode.previousPosition = position;
            // test if the move has been made already (in accessed array); if not, don't add to the queue
            if (!isArrayInArray(accessed, v)) {
                accessed.push(v)
                queue.push(v)
            }
        }
        // get the position at the start of the queue
        let nextNeighbour = queue[0];
        queue.shift()
        let futureChain = null;
        let prev = null;
        // [futureChain, prev] = recursiveBuildTree(nextNeighbour, end, queue, accessed, previousPosition)
        // [futureChain, prev] = recursiveBuildTree(nextNeighbour, end, queue, accessed)
        [futureChain, previousPosition] = recursiveBuildTree(nextNeighbour, end, queue, accessed)
        // why do i get 6,4
        // previousPosition = prev
        recursivePath += futureChain

        if (JSON.stringify(position) === JSON.stringify(accessed[0])) {
            previousPosition = position;
        }

        // for some reason, 3,1 and 1,2 do not show up...
        // instead there is 6,4 after 4,3
        if (previousPosition === position) {
            let previousNode = getNodeFromList(previousPosition, vertices)
            previousPosition = previousNode.previousPosition
            recursivePath = JSON.stringify(position) + recursivePath;
            console.log(position)
            console.log(previousPosition)
            return [recursivePath, previousPosition];
        }
        // this should be the previous position that was set 
        return ['' + recursivePath, previousPosition];
}
    return recursiveBuildTree(start, end)
}

console.log(
// knightMoves([3,3], [0,0])
// knightMoves([4,3], [0,0])
// ,

// knightMoves([0,0], [5,3])
// knightMoves([4,3], [7,7])
// knightMoves([7,7], [0,0])
knightMoves([0,0], [7,7])
// knightMoves([0,0], [3,3])
)