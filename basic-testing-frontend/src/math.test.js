import { test, expect } from 'vitest';
import { add } from './math';


test('sums up all number values in an array', () => {
    const numbers = [1, 2, 3];
    const result = add(numbers);
    // define our expectations
    expect(result).toBe(6);
});