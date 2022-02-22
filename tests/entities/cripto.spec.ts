import { Cripto } from '../../src/entities/Cripto';

describe(`${Cripto.name}`, () => {
  it('Shoukd create a new Entity', () => {
    const cripto = new Cripto();

    expect(cripto.id).toBeTruthy();
  });
});