// Training JS #8: Conditional statement--switch

// Task

// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.

function howManydays(month){
    switch (month) {
      case 4: return 30;
      case 6: return 30;
      case 9: return 30;
      case 11: return 30;
      case 2: return 28;
      default: return 31
      break;
    }
}