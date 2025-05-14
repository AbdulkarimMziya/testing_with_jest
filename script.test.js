import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./script";

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

test("Analyze Array: single number", () => {
    expect(analyzeArray([10])).toEqual({
      average: 10,
      min: 10,
      max: 10,
      length: 1,
    });
  })

test('Analyze Array: [1, 8, 3, 4, 2, 6]', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
})