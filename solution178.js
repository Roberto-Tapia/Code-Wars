// Break camelCase

// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(string) {
    let stringArray = [...string]
  
    let newArray = stringArray.map(x => {
      return x === x.toUpperCase() ? ` ${x}` : x
    })
    
    return newArray.join('')
  }
  