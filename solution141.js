// Two to One

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    let combined = s1 + s2; // combine the two strings
    let unique = [...new Set(combined)]; // get the unique letters
    console.log(unique)
    let sorted = unique.sort().join(''); // sort the letters and join them into a string
      return sorted
  
  }