// Vowel remover

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut (string) {
    let arr = [...string]
    console.log(arr)
    
    arr = arr.filter(x => x != "e" && x != "a" && x != "i" && x != "o" && x != "u")
  
    return arr.join('')
    
  }