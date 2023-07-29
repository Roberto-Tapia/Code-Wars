// Find the Remainder

// Task:

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.

function remainder(n, m){
    let high
    let low
    
    if (n > m) {
      low = m
      high = n
    } else {
      low = n
      high = m
    }
    
    return low < 1 ? NaN : high % low
    
  }