import { test, expect } from 'vitest';
import { add } from './math';


test('sums up all number values in an array', () => {
    add([1, 2, 3]);
    // define our expectations
    expect(result).toBe(6);
});