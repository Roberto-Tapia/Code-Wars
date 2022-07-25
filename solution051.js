// Sum Mixed Array

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let array = x.map(num => Number(num))
    return array.reduce((init, curr) => init + curr, 0)
  }
  