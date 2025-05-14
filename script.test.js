import { capitalize, reverseString, calculator, caesarCipher } from "./script";

test('Capitalize first leter', () => {
  expect(capitalize("logan")).toBe("Logan")
})

test('Reverse a string', () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH")
})

test("Sum: 10 + 5", () => {
    expect(calculator.add(10,5)).toBe(15)
})

test("Subtract: 10 - 5", () => {
    expect(calculator.subtract(10,5)).toBe(5)
})

test("Divide: 10 / 5", () => {
    expect(calculator.divide(10,5)).toBe(2)
})

test("Multiply: 10 * 5", () => {
    expect(calculator.multiply(10,5)).toBe(50)
})

test("Ceasar Cipher: 'xyz' -> 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})

test("Ceasar Cipher: 'XYZ' -> 3", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC")
})

test("Ceasar Cipher: 'aBc' -> 3", () => {
    expect(caesarCipher("aBc", -3)).toBe("xYz")
})