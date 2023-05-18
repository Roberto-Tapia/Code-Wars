// // Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// Description:

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

function remove (string) {
    let newArray = []
    
    for (let i = 0; i < string.length; i++){
      if (string[i] != '!') {
        newArray.push(string[i])
      }
    }
    
    newArray.push('!')
    
    return(newArray.join(''))
  }