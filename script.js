export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}