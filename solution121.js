// Add Lengt

// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

function addLength(str) {
    let arr = str.split(' ')
    console.log(arr)
    let newArr = []
    
    arr.forEach(x => newArr.push(`${x} ${x.length}`))
    
    return newArr
  }