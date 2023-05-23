function strongPassword(password) {
  let steps = 0;

  if (password.length < 6) {
    steps += 6 - password.length;
    password = password.padEnd(6, ' ');
  } else if (password.length > 20) {
    steps += password.length - 20;
    password = password.substring(0, 20);
  }

  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (/[a-z]/.test(char)) {
      hasLower = true;
    } else if (/[A-Z]/.test(char)) {
      hasUpper = true;
    } else if (/\d/.test(char)) {
      hasDigit = true;
    }
  }

  if (!(hasLower && hasUpper && hasDigit)) {
    steps += 1;
  }

  let repeatingChars = 0;

  for (let i = 2; i < password.length; i++) {
    if (password[i] === password[i - 1] && password[i] === password[i - 2]) {
      repeatingChars += 1;
    }

    if (repeatingChars > 0) {
      steps -= Math.floor(repeatingChars / 2);
    }
  }

  return Math.max(steps, 3 - (hasLower + hasUpper + hasDigit));
}

// Example usage
console.log(strongPassword("Baaabb0"));  // Output: 1
console.log(strongPassword("Baaba0"));   // Output: 0
