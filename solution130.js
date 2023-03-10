// Simple Fun #176: Reverse Letter

// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {

    let alphabet = `abcdefghijklmnopqrstuvwxyz`
    let newString = str.split('')
    
    
    return newString.filter(x => alphabet.includes(x)).reverse().join('')  
}