import { calculatePercentVariation } from '../../src/utils/calculatePercentVariation';

describe(`${calculatePercentVariation.name}`, () => {
  it('Should calculate the correct percent variation from 100 to 50', () => {
    expect(calculatePercentVariation(100, 50)).toBe(-50);
  });

  it('Should calculate the correct percent variation from 30 to 60', () => {
    expect(calculatePercentVariation(30, 60)).toBe(100);
  });
});
