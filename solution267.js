// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

function rowSumOddNumbers(n) {
	let array = []
  let number = (n * (n - 1)) + 1
  
  for (let i = 1; i <= n; i ++){
    array.push(number)
    number += 2
  }

  return (array.reduce((a, b) => a + b))
}