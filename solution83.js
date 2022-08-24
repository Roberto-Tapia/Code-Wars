// Expressions Matter

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
    let one = a * (b + c)
    let two = a * b * c
    let three = a + b * c
    let four = (a + b) * c
    let five = a + b + c
    
    let array = [one, two, three, four, five]
    
    array.sort((a,b) => b - a)
    
    return array[0]
    
  }