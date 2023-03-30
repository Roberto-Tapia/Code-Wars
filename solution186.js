// Data Reverse

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  
    let newArray = []
    
    let forLoopRepetitions = data.length / 8
    
    //loop N times
    for (let i = 1; i <= forLoopRepetitions; i++){
      
      newArray.push([])
      
    //each time pushing the first 8 numbers of the array into NewArray
      for (let j = 0; j < 8; j++){
        newArray[i - 1].push(data[j])
      }
      
    //remove first 8 elements
      data.splice(0, 8)
    }
    
    //reverse array and flatten it
    return newArray.reverse().flat()
  }