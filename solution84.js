// Lario and Muigi Pipe Problem

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
    let max = Math.max(...numbers)
    let min = Math.min(...numbers)
    let array = []
    for (let i = min; i <= max; i++){
      array.push(i)
    }
    return array
  }