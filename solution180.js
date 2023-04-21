// Maximum Product 

// Task

// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

function adjacentElementsProduct(array) {
    let max = array[0] * array[1]
    
    console.log(array)
    
    for (let i = 0; i < array.length; i++) {
      array[i] * array [i + 1] > max ? max = array[i] * array [i + 1] : max = max
        
    }
      
    return max
  }