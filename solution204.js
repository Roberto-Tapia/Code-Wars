// Counting Duplicates

// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
    let array = text.toLowerCase().split('')
    console.log(array);
  
    let solution = {};
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (solution[array[i]]) {
        solution[array[i]] += 1;
      } else {
        solution[array[i]] = 1;
      }
    }
    console.log(solution);
  
    for (let key in solution) {
      if (solution[key] > 1) {
        count++;
      }
    }
    return count
  }