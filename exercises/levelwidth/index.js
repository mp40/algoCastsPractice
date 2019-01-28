// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const results = [0]
    const queue = [root,"!"]
    while(queue.length>1){
        const node = queue.shift()
        if(node === "!"){
            queue.push("!")
            results.push(0)
        } else {
            queue.push(...node.children)
            results[results.length-1]++
        }
    }
    return results
}

module.exports = levelWidth;
