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