// In a game of chess, a queen is the most powerful piece on the board. She can move an unlimited number of squares in a straight line in any of 8 directions (forwards, backwards, left, right, and each of the four diagonals in between).

// The diagram below shows the queen's influence from her current position - she would be able to take any piece on a square marked with an 'X'.

// An opponent's king who can be taken by the queen is said to be in 'check', and would then need to find some way to escape this situation.

// In any normal game of chess, the queen would work with her army on an 8x8 board to threaten the king in this way, and ultimately try to win the game. However, for this kata, the queen will work by herself on a 5x5 board.

// The 5x5 chessboard will be represented as a 2 dimensional array, (ie: an array containing 5 other arrays, each containing 5 single character elements). Empty spaces within each sub-array will be represented by an asterix: "*", while one of these 25 elements will be represented by a "q" (queen) and a "k" (king). Both will be represented in lower case.

// Your task is to write a function which will return true if the king is in check, and false if he isn't.

function check(board) {
    // In check or not?
      let king
    let queen
    
    console.log(board)
    
    for (let i = 0; i < board.length; i++){
      for (let j = 0; j < board[i].length; j++){
              if (board[i][j] == 'k'){
          king = [i, j]
        } else if (board[i][j] == 'q'){
          queen = [i, j]
        }
      }
    }
    console.log(`position of king is: ${king}`)
    console.log(`position of king is: ${queen}`)
    
    if (king[0] == queen[0] || king[1] == queen[1]){
      console.log(`horizontal or vertical is TRUE`)
          return true
    }
    let diff = king[0] - queen[0]
    console.log(diff)
    
      if (king[1] - diff == queen[1] || king[1] + diff == queen[1]){
      console.log(`diagonal is TRUE`)
      return true
    }
    else {
      return false
    }
  }