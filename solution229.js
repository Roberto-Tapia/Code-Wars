// Even numbers in an array

// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
    let flipped = [...array].reverse()
    let count = []
    console.log(flipped)
    
    for (let i = 0; count.length < number; i++){
      if (flipped[i] % 2 == 0) {
        count.push(flipped[i])
      }
    }
    return count.reverse()
  }