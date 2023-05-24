// Count the divisors of a number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

function getDivisorsCnt(n) {
    let count = 0;
  
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        count += 2;
      }
    }
  
    // If n is a perfect square, we need to subtract 1 from the count.
    if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
      count--;
    }
  
    return count;
  }