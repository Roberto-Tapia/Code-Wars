// CALCULATE AVERAGE

// Write a function which calculates the average of the numbers in a given list.
// note: empty arrays should return 0

const find_average = array => {
    let sum = array.reduce((total, current) => total + current, 0)
    return sum ? sum / (array.length) : 0
  }
  