// Is n divisible by (...)?

// Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

function isDivisible(...numbers){
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[0] % numbers[i] !== 0) {
        return false
      }
    }
    return true
  }
  