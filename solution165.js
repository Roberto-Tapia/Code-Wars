// Duplicate Encoder

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 


function duplicateEncode(word){
    const array = [...word.toLowerCase()]
    const count = {}
    const newArray = []
  
    for (const char of array) {
      count[char] = count[char] ? count[char] + 1  : 1
    }
  
    console.log(count)
  
    for (let i = 0; i < array.length; i++){
     newArray.push(count[array[i]] > 1 ? `)` : `(`)
    }
                    
    return newArray.join('')
}
