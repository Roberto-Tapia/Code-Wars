// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let ints = x.filter(elem => elem === Number(elem))
    let strings = x.filter(elem => elem === elem.toString()).map(Number)
    
    if (ints.length < 1) {
      ints = 0
    } else {
      ints = ints.reduce((a, b) => a + b)
    }
    
    if (strings.length < 1) {
      strings = 0
    } else {
      strings = strings.reduce((a,b) => a + b)
    }
    
    return ints - strings
  }