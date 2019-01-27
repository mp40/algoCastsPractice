// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    
    return arr
}

function selectionSort(arr) {
    for(let i =0; i<arr.length; i++){
        let indexOfMin = i
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j
            }
        }
        if(indexOfMin !== i){
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    return arr
}

function mergeSort(arr) {
    if(arr.length === 1){
        return arr
    }
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const results = []
    while(left.length && right.length){
        left[0] < right[0] ?
        results.push(left.shift()) :
        results.push(right.shift())
    }
    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
