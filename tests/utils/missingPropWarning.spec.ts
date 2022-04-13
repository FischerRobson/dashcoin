import { missingPropWarning } from '../../src/utils/missingPropWarning';

describe(`${missingPropWarning.name}`, () => {
  it('Should throw error for missing prop', () => {
    const props = ['name', 'age', 'gender'];
    const person = {
      name: 'Jhon Doe',
      age: 27,
    };

    // expect(missingPropWarning(props, person)).toThrowError('Missing props: gender');
    expect(() => missingPropWarning(props, person)).toThrowError(new Error('Missing props: gender'));
  });

  it('Should not throw error for missing prop', () => {
    const props = ['name', 'age', 'gender'];
    const person = {
      name: 'Jhon Doe',
      age: 27,
      gender: 'M',
    };

    expect(() => missingPropWarning(props, person)).not.toThrowError(new Error('Missing props: gender'));
  });
});
