// Find the vowels

// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

function vowelIndices(word){
  let vowels = 'aeiouy'
  let newArray = []
  
  word.toLowerCase().split('').map((x, ind) => vowels.includes(x) === true ? newArray.push(ind + 1) : null)
  
  return newArray
}