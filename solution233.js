// Adjacent repeated words in a string

// You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened? For example, you've been distracted for a second. Did you notice that "the" is doubled in the first sentence of this description?

// As as aS you can see, it's not easy to spot those errors, especially if words differ in case, like "as" at the beginning of this sentence.

// Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other counts as one.

function countAdjacentPairs(searchString) {
    let string = searchString.toLowerCase().split(' ')
      
    let count = 0
    
    
    for (let i = 0; i < string.length; i++){
      if (string[i] === string[i + 1] && string[i + 1] !== string[i + 2]) {
        count++
      }
    }
    
    return count
  }