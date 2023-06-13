// Detect PangramA pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
  let object = {
    "a": false,
    "b": false,
    "c": false,
    "d": false,
    "e": false,
    "f": false,
    "g": false,
    "h": false,
    "i": false,
    "j": false,
    "k": false,
    "l": false,
    "m": false,
    "n": false,
    "o": false,
    "p": false,
    "q": false,
    "r": false,
    "s": false,
    "t": false,
    "u": false,
    "v": false,
    "w": false,
    "x": false,
    "y": false,
    "z": false
  }
  
  let array = [...string].map(x => x.toLowerCase()).filter(letter => /[a-zA-Z]/.test(letter))
  
  for (let i = 0; i < array.length; i++){
    if(object.hasOwnProperty(array[i])) {
      object[array[i]] = true
  }
    }
  
  for (let key in object){
    if(object[key] == false) {
      return false
    }
  }
  return true
}