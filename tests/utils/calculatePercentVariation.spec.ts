import { calculatePercentVariation } from '../../src/utils/calculatePercentVariation';

describe(`${calculatePercentVariation.name}`, () => {
  it('Should calculate the correct percent variation from 100 to 50', () => {
    expect(calculatePercentVariation(100, 50)).toBe(-50);
  });

  it('Should calculate the correct percent variation from 50 to 100', () => {
    expect(calculatePercentVariation(50, 100)).toBe(100);
  });
});
