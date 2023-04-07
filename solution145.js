// Sum of Pairs

// Sum of Pairs

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// Negative numbers and duplicate numbers can and will appear.

function sumPairs(ints, s) {
    let seen = {};
    
    for (let i = 0; i < ints.length; i++) {
      let complement = s - ints[i];
      
      if (seen.hasOwnProperty(complement)) {
        return [complement, ints[i]];
      }
      
      seen[ints[i]] = true;
    }
    
    return undefined;
  }