// Find the capitals

// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
	let array = [...word]
  let solution = []
  
  array.forEach((x, ind) => {
    x === x.toUpperCase() ? solution.push(ind) : null
  })
  
  return solution
};