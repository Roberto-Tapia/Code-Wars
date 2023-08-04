// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){
    let array = x.split(' ')
    console.log(array)
    
    //convert each word to number
    
    let numbers = array.map(word => {
      let sum = 0
      for (let i = 0; i < word.length; i++) {
        sum += word.charCodeAt(i) - 96
      }
      return sum
    })
    
    //sort and put the highest number in the front
    let sorted = [...numbers].sort((a, b) => b - a)
    
    //find index of the highest numbers in the unsorted array
    let index = numbers.indexOf(sorted[0])
    
    return array[index]
  }