// Largest 5 digit number in a series

// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function solution(digits){
    let array = digits.split('')
    let newArray = []
    
    for (let i = 0; i < array.length - 4; i++) {
      newArray.push(array[i] + array[i + 1] + array[i + 2] + array[i + 3] + array[i + 4])
    }
    
    newArray.sort((a, b) => b - a)
    return Number(newArray[0])
  }