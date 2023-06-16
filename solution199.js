// Minimize Sum Of Array (Array Series #1)  

// Task

// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  //arange the array in order of greatest to least
  let array = [...arr].sort((a, b) => a - b)
  let finalArray = []
  //multiply the first number of each array
  let array1 = array.slice(0, array.length / 2)
  let array2 = array.slice(array.length / 2).reverse()
  
  for (let i = 0; i < array1.length; i++){
    finalArray.push(array1[i] * array2[i])
  }
  
  return finalArray.reduce((total, current) => total + current)
}