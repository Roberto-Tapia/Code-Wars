// SUM WITHOUT HIGHEST AND LOWEST NUMBERS

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    if (array && array.length > 1) {
        let highLow = Math.max(...array) + Math.min(...array)
        return array.reduce((accumulator, currentVal) => accumulator + currentVal, 0) - highLow
    } else {
      return 0
    }
  }