// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//         expandedForm(12); // Should return '10 + 2'
//         expandedForm(42); // Should return '40 + 2'
//         expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
    return num.toString()
              .split('')
              .reverse()
              .map ((val, ind) => val * Math.pow(10, ind))
              .filter(a => a > 0)
              .reverse()
              .join(' + ')
  }