// Summing a number's digits

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. 

function sumDigits(number) {
    let array = number.toString().split('').map(x => Math.abs(x))
    let count = 0
    
    console.log(array)
    
    for (let i = 0; i < array.length; i++) {
      if (array[i]){
        count += array[i]
      }
    }
    return count
  }