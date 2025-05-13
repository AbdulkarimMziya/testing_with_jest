import { capitalize, reverseString } from "./script";

test('Capitalize first leter', () => {
  expect(capitalize("logan")).toBe("Logan")
})

test('Reverse a string', () => {
    expect(reverseString("Hello World")).toBe("dlroW olleH")
})