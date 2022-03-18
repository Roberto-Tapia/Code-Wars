function elevator(left, right, call){
    let resultL = Math.abs(call - left)
    let resultR = Math.abs(call - right)
    if (resultL < resultR) {
      return "left" 
    } else {
      return "right"
    }
  }