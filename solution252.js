// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
    let array = []
    
    for (let i = 0; i < nFloors; i++) {
      let spaces = " ".repeat(nFloors - i - 1)
      let stars = "*".repeat(2 * i + 1)
      array.push(spaces + stars + spaces)
    }
    return array
  }