import { calculatePercentVariation } from '../../src/utils/calculatePercentVariation';

describe(`${calculatePercentVariation.name}`, () => {
  it('Should calculate the correct percent variation from 100 to 50', () => {
    expect(calculatePercentVariation(100, 50)).toBe(-50);
  });

<<<<<<< HEAD
  it('Should calculate the correct percent variation from 30 to 60', () => {
    expect(calculatePercentVariation(30, 60)).toBe(100);
=======
  it('Should calculate the correct percent variation from 50 to 100', () => {
    expect(calculatePercentVariation(50, 100)).toBe(100);
>>>>>>> 32b722f4d266a383f3eafd64c2d15053c6acbcee
  });
});
