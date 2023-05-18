// Maximum Length Difference

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

function maxLengthDifference(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
      return -1;
    }
  
    let maxDiff = 0;
  
    for (let x of a1) {
      for (let y of a2) {
        const diff = Math.abs(x.length - y.length);
        if (diff > maxDiff) {
          maxDiff = diff;
        }
      }
    }
  
    return maxDiff;
  }
  