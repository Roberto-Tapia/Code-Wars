// Unique In Order

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    let iterArr = [...iterable]
    console.log(iterArr)
    let newArray = []
    
    for (let i = 0; i < iterArr.length; i++){
      if (iterArr[i] !== iterArr[i - 1]){
        newArray.push(iterArr[i])
      }
    }
    return newArray
  }