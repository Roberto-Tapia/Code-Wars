// Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let count = 0;
    
    while (num.toString().length > 1) {
      count++;
      num = num.toString().split('').map(Number).reduce((a, b) => a * b);
    }
  
    return count;
  }
  