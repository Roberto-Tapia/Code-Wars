// Beginner Series #3 Sum of Numbers

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b){
    let sorted = [a, b].sort((a,b) => b - a)
    let newArray = []
    
    //find all numbers in between an put in an array
    for (let i = sorted[0]; i >= sorted[1]; i--) {
      newArray.push(i)
    }

    //add all numbersd in array and return total
    return newArray.reduce((a,b) => a + b, 0)
  }