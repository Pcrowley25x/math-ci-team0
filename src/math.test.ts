import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';

describe('add', () => {
  it('adds two positive number', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtratcs two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });
  it('returns zero when multiplied by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null or negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('power', () => {
  it('returns 8 from 2 to the power of 3', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('returns 1 when exponent is 0', () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe('average', () => {
  it('returns 4 when theres an average of 2, 4, 6', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  it('returns null when there are no numbers within the array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('return 5 when your value, min and max are 5, 1, 10', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });
  it('return 5 when your value, min and max are 5, 1, 10', () => {
    expect(clamp(-3, 0, 100)).toBe(0);
  });
});

describe('quadratic', () => {
  it('returns two real roots when the discriminant is positive', () => {
    expect(quadratic(1, -3, 2)).toEqual([1, 2]);
  });

  it('returns one real root when the discriminant is zero', () => {
    expect(quadratic(1, -2, 1)).toEqual([1]);
  });

  it('returns null when the discriminant is negative', () => {
    expect(quadratic(1, 0, 1)).toBeNull();
  });
});
