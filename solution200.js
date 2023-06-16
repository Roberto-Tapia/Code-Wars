// Mexican Wave

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

function wave(str) {
    let array = [...str]
    let newArray = []
  
    for (let i = 0; i < array.length; i++) {
      let newWord = array.map((letter, ind) => ind === i ? letter.toUpperCase() : letter)
      
      array[i] != " " ? newArray.push(newWord.join('')) : null
    }
    
    return newArray
  }
  