export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export const calculator = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b,
}

export function caesarCipher(str, shift) {
    if (typeof str !== "string" || typeof shift !== "number") {
      throw new TypeError("Invalid arguments: expected a string and a number");
    }
  
    return str
      .split("")
      .map((char) => shiftChar(char, shift))
      .join("");
  }
  
  // Helper: Shift a single character
  function shiftChar(char, shift) {
    if (isUpperCase(char)) {
      return shiftAlphaChar(char, shift, 65); // A-Z
    }
    if (isLowerCase(char)) {
      return shiftAlphaChar(char, shift, 97); // a-z
    }
    return char; // non-alphabetical
  }
  
  // Helper: Shift alphabet character with wraparound
  function shiftAlphaChar(char, shift, base) {
    const charCode = char.charCodeAt(0) - base;
    const shiftedCode = ((charCode + shift) % 26 + 26) % 26; // handle negative shifts
    return String.fromCharCode(shiftedCode + base);
  }
  
  // Helper: Detect upper case
  function isUpperCase(char) {
    return char >= "A" && char <= "Z";
  }
  
  // Helper: Detect lower case
  function isLowerCase(char) {
    return char >= "a" && char <= "z";
  }

  export function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      throw new Error("Input must be a non-empty array of numbers.");
    }
  
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
  
    return {
      average,
      min,
      max,
      length
    };
  }
  