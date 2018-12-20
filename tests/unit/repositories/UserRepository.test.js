const { expect, td } = require('../helpers');
const UserRepository = require('../../../src/repositories/UserRepository');

describe('User repository', () => {
  let database;

  beforeEach(() => {
    const table = {
      get: td.func(),
    };
    td.when(table.get()).thenReturn([{ id: 1 }]);
    
    database = td.func();
    td.when(database('users')).thenReturn(table);
  })

  it('should get all users', async () => {
    const userRepository = new UserRepository(database, 'users');
    const users = await userRepository.all();

    expect(users).to.be.eql([
      { id: 1 },
    ]);
  });
})