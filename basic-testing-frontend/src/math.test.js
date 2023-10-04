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