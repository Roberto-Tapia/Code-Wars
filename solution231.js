// Basic method

// Extend the Array's built-in functions by implementing .max() method. This method will return the largest number in the array. If the array contains one or more non-number elements that can't be converted into numbers (e.g., string letters), return NaN

Array.prototype.max = function() {
    return Math.max(...this)
  }