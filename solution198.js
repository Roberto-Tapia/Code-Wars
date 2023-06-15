// Equal Sides Of An Array

// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr){
  
    for (let i = 0; i < arr.length; i++){
      let left = arr.slice(0, i).length > 0 ? arr.slice(0, i) : [0]
      let right = arr.slice(i + 1).length > 0 ? arr.slice(i + 1) : [0]
      
      
      if (left.reduce((acc, curr) => acc + curr) === right.reduce((acc, curr) => acc + curr)){
        return i
      }
      
    }
    return -1
  }