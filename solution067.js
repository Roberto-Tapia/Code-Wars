// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    let array = s.split('')
    return array.filter(x => x != '!').join('')
  }