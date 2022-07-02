// String ends with

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    let lengthEnding = ending.length
    let lengthStart = str.length
    if (str.slice(lengthEnding * -1) === ending){
      return true
    } else if (ending.length == 0){
      return true
      }else {
      return false
    }
  }