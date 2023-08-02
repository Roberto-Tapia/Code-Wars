// Ordered Count of Characters

// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

const orderedCount = function (text) {
    let obj = {}
    let order = [];
  
    [...text].forEach(x => {
      if (!obj[x]) {
        obj[x] = 1
        order.push(x)
      } else {
        obj[x] += 1
      }
    })
  
    let solution = order.map(x => [x, obj[x]])
    return solution
  }