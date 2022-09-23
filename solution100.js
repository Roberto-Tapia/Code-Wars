// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

const replace = s => {
    return s.replace(/a/gi, '!').replace(/e/gi, '!').replace(/i/gi, '!').replace(/o/gi, '!').replace(/u/gi, '!')
  }