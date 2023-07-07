// Regex validate PIN code

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    for (let i = 0; i < pin.length; i++){
      if(!'1234567890'.includes(pin[i])){
        return false
      }
    }
    return pin.length === 4 || pin.length === 6;
  }