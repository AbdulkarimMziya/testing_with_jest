import { capitalize, reverseString, calculator } from "./script";

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
