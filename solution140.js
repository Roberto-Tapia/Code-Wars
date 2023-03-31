// Fix string case

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

//     make as few changes as possible.
//     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.


function solve(s){
  
    let countingArray = s.split('')
    
    let upper = 0
    let lower = 0
    
    for (let i = 0; i < countingArray.length; i++){
      if (countingArray[i] === countingArray[i].toLowerCase()){
        lower++
      } else {
        upper++
      }
    }
    
    
    if (upper > lower){
      return countingArray.join('').toUpperCase()
    } else {
      return countingArray.join('').toLowerCase()
    }
  }