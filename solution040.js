// Count the Digit

// n = 10, d = 1 
// the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1) returns 11 since
// the k*k that contain the digit 1 are:
// 1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
// So there are 11 digits 1 for the squares of numbers between 0 and 25.

function nbDig(n, d) {
    let array = []
    for (let i = 0; i <= n; i++) {
        array.push(Math.pow(i, 2)) 
    }
    array = array.join('').split('').filter(num => num == d)
    return array.length
    
  }