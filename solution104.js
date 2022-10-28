// Sum The Strings

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

function sumStr(a,b) {
    if (!a && !b) {
      return '0'
    } else if (a.length === 0) {
      return b
    } else if (b.length === 0) {
      return a
    } else {
      return (parseInt(a) + parseInt(b)).toString()
    }
  }