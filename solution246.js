// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

// The next number in having this property is 135135135:

// See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=11+32+53
// Task

// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

function sumDigPow(a, b) {
    let result = [];
    
    for (let i = a; i <= b; i++) {
      let sum = 0;
      let digits = i.toString().split('');
      
      for (let j = 0; j < digits.length; j++) {
        sum += Math.pow(parseInt(digits[j]), j + 1);
      }
      
      if (sum === i) {
        result.push(i);
      }
    }
    
    return result;
  }