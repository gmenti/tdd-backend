const { expect, td } = require('../helpers');
const UserService = require('../../../src/services/UserService');

describe('User service', () => {
  let userRepository;

  beforeEach(() => {
    userRepository = {
      all: td.func(),
    };
    td.when(userRepository.all()).thenResolve([
      { id: 1 }
    ]);
  });

  it('should get all users', async () => {
    const userService = new UserService({ userRepository });
    const users = await userService.all();

    expect(users).to.be.eql([
      { id: 1 },
    ]);
  });
});
