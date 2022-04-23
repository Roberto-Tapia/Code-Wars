const quarterOf = (month) => {
    if (month/3 <= 1) {
      return 1
    } else if (month/3 <= 2) {
      return 2
    } else if (month/3 <= 3) {
      return 3
    } else {
      return 4
    }
}
