// Form The Minimum
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// ex: minValue ({1, 3, 1})  ==> return (13)

function minValue(values){
    let array = values
    let filteredArray = array.filter((elem, index) => array.indexOf(elem) === index)
    filteredArray = filteredArray.sort((a, b) => a - b)
    return Number(filteredArray.join(''))
  }