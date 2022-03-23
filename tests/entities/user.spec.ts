import { User } from '../../src/entities/User';

describe(`${User.name}`, () => {
  it('Shoukd create a new Entity', () => {
    const user = new User();

    expect(user.id).toBeTruthy();
  });
});
