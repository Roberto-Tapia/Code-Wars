// Disemvowel Trolls

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    let newString = str.split('')
    return newString.filter(letter => (letter.toLowerCase() != 'i' && letter.toLowerCase() != 'e' && letter.toLowerCase() != 'a' && letter.toLowerCase() != 'o' && letter.toLowerCase() != 'u')).join('')
  }