// Moving Zeros To The End

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  
    let newArray = []
    let count  = 0
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        newArray.push(arr[i])
      } else {
        count++
      }
    }
    if (count > 0) {
      for (let j = 1; j <= count; j++) {
        newArray.push(0)
      }
    }
    
    return newArray
  }