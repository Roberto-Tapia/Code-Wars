// Greet Me

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function(name) {
    let array = name.toLowerCase().split(' ')
    console.log(array)
    
    let finalArray = array.map(name => {
      return name[0].toUpperCase() + name.slice(1, name.length + 1)
    })
    
    return `Hello ${finalArray.join(' ')}!`
  
  };