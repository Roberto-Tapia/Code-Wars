// Bin to Decimal

// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    let array = bin.split('').reverse()
    let convertedArray = []
    for (let i = 0; i < array.length; i++) {
       convertedArray.push((array[i]) * (Math.pow(2, i)))
    }
    return convertedArray.reduce((total, current) => total + current)
  }