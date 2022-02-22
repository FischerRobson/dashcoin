import { URL } from '../../src/constants/urls';

describe('URLs', () => {
  it('should return a URL containing the cripto bitcoin argument with MERCADO BITCOIN', () => {
    expect(URL.MERCADO_BITCOIN('bitcoin')).toBe('https://www.mercadobitcoin.net/api/bitcoin/ticker/');
  });

  it('should return a URL containing the cripto ethereum argument with MERCADO BITCOIN', () => {
    expect(URL.MERCADO_BITCOIN('ethereum')).toBe('https://www.mercadobitcoin.net/api/ethereum/ticker/');
  });
});