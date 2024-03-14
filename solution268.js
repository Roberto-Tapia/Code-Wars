// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

function highestRank(arr){
  
    let obj = {}
    
    arr.forEach(x => {
      if (obj[x]) {
        obj[x]++
      } else {
        obj[x] = 1
      }
    })
    
    let entries = Object.entries(obj).reverse()
    
    let answer = [0,0]
    
    entries.forEach(([key, val]) => {
      if (val > answer[1]) {
        answer = [key, val]
      }
    })
    
    return Number(answer[0])
  }