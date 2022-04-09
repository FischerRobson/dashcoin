import { validateCpf } from '../../src/utils/validateCpf';

describe(`${validateCpf.name}`, () => {
  it('Should return true for a valid CPF', () => {
    expect(validateCpf('25302518007')).toBeTruthy();
  });

  it('Should return false for a invalid CPF', () => {
    expect(validateCpf('99999999999')).toBeFalsy();
  });

  it('Should return false for a invalid CPF', () => {
    expect(validateCpf('15648912377')).toBeFalsy();
  });
});
