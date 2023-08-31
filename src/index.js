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
    //may need to introduce a 'future node'
    function recursiveBuildTree(position, end, queue=[], accessed=[], previousPosition) {
        let currentNode = getNodeFromList(position, vertices)
        previousPosition = currentNode.previousPosition
        // console.log(previousPosition)
        // console.log(position)
        console.log('current node')
        console.log(currentNode.coords)
        console.log(position)
        console.log(currentNode)


        let recursivePath = '';
        accessed.push(position)

        // check if current move leads to the end position
        for (v of currentNode.neighbouringMoves) {
            if (JSON.stringify(v) === JSON.stringify(end)) {
                // do some stuff required to check if path can be added
                accessed.push(end)
                // i'm not convinced that this does what i expect... these don't have that property. i need to get the node
                // so here, i'm making the chain true
                currentNode.partOfChain = true;
                // start building the chain
                recursivePath = `${JSON.stringify(position)}${JSON.stringify(v)}`
                // i iwll need to return recrusivePath and previousPosition
                // return recursivePath;
                return [recursivePath, previousPosition];
            }
        }

        // else, add all moves (not already made) to queue and accessed array
        console.log('neighbours')
        for (v of currentNode.neighbouringMoves) {
            // console.log(v)
            let neighbourNode = getNodeFromList(v, vertices)
            neighbourNode.previousPosition = position;
            console.log(neighbourNode)
            // test if the move has been made already (in accessed array); if not, don't add to the queue
            if (!isArrayInArray(accessed, v)) {
                // this cuts down the amount of moves, but it still isn't correct
                accessed.push(v)
                queue.push(v)
            }
        }
        console.log(' ')

        // get the position at the start of the queue
        let nextNeighbour = queue[0];
        queue.shift()
         // i am gonna try returnign the previousPosition
         // i will have to modify the recursivePath line a little, so i will need to return an array of string and position
         let futureChain = null;
         let prev = null;
         [futureChain, prev] = recursiveBuildTree(nextNeighbour, end, queue, accessed, previousPosition)
        //  console.log(futureChain)
         recursivePath += futureChain
         previousPosition = prev

        //  console.log(previousPosition)

         if (previousPosition === position) {
            let previousNode = getNodeFromList(previousPosition, vertices)
            console.log(previousNode)
            previousPosition = previousNode.previousPosition
            //what do i put in here?
            // maybe the recursivePath thingie, and nothing else, like so:
            recursivePath = JSON.stringify(position) + recursivePath;
            let test = [recursivePath, previousPosition]
            console.log(test)
            return [recursivePath, previousPosition];
         }
            // for (v of currentNode.neighbouringMoves) {
            //     let neighbourNode = getNodeFromList(v,vertices)
            //     if (neighbourNode.partOfChain === true)
            //      {
            //         currentNode.partOfChain = true;
            //         recursivePath = JSON.stringify(position) + recursivePath;
            //         return recursivePath;
            //     }
            // }
            // i just want previousPosition to stay as 1,3 ...  is that so much to ask
            // i might need to return it? i'm not 
            // console.log(recursivePath)
            let test = [''+recursivePath, previousPosition]
            // console.log(test)
            return ['' + recursivePath, previousPosition];
}
    return recursiveBuildTree(start, end)
}

console.log(
// knightMoves([3,3], [0,0])
knightMoves([4,3], [0,0])
// ,

// knightMoves([0,0], [5,3])
// knightMoves([4,3], [7,7])
// knightMoves([7,7], [0,0])
// knightMoves([0,0], [3,3])
)