// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    console.log(words)
    
    let solution  = []
    
    //split into an array
    let array = words.split(' ')
    console.log(array)
    
    //get the length of the array and for Loop though the array to match the "i" to a .contains
    for (let i = 1; i <= array.length; i++) {
      solution.push(array.filter(x => x.includes(i)))
    }
    
    return array.length === 0 ? words : solution.join(' ')
  }