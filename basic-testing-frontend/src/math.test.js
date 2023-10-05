import { test, expect } from 'vitest';
import { add } from './math';


test('sums up all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((preValue, curValue) => preValue + curValue, 0);
    // define our expectations
    expect(result).toBe(expectedResult);
});

test("yields NaN if at least one invalid number is provided", () => {
    // Arrange
    const inputs = ['invalid', 1];

    // Act
    const result = add(inputs);

    // Assert
    expect(result).toBeNaN();
});

test("yields a correct sum if an array of numeric string values is provided", () => {
    // Arrange
    const numbers = ['1', '2'];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((preValue, curValue) => +preValue + +curValue, 0); // Adding + to force a converstion to a real number

    expect(result).toBe(expectedResult)
})

test("yields 0 if an empty array is provided", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0)
})

test("throws an error if no value is passed into the function", () => {    
    const resultFn = () => {
        add();
    }
    expect(resultFn).toThrow();
    // Logic: expect should receive a function and vitest should execute this function for us and checked whether it froze. 
    // By wrapping add() in a function, we can make sure it's not executed immediately, but instead in combination with toThrow(), which checks whether an error was thrown. The function stored in resultFn will be executed by Vitest when the test runs and Vitest will check whether an error was thrown and then consider the test successful if an error was thrown or unsuccessful if otherwise.
    // Remember: the "note" property checks for the opposite.

    // Alternative method: try/catch block
    // try {
    //     const result = add();
    // } catch(error) {
    //     expect(error).toBeDefined();
    // }
})

