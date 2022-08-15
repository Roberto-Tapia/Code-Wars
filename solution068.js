// Exclamation marks series #1: Remove an exclamation mark from the end of string

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

function remove (string) {
    //coding and coding....
    return string[string.length - 1] == '!' ? string.slice(0, -1) : string
  }

// it can also be solves by using this solution

const remove = string => string.replace(/!$/, '')