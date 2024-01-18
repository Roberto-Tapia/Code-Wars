// Sum of Minimums!

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

function sumOfMinimums(arr) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
      newArray.push(Math.min(...arr[i]))
    }
    return newArray.reduce((a,b) => a + b)
}