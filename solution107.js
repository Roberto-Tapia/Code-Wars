
// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let newArray = numbers.split(' ').sort((a,b) => a - b)
    
    let length = newArray.length
    
    console.log(newArray)
    return `${newArray[length - 1]} ${newArray[0]}`
  }