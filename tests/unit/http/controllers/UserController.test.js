const { expect, td } = require('../../helpers');
const UserController = require('../../../../src/http/controllers/UserController');

describe('User controller', () => {
  let userController;

  beforeEach(() => {
    userController = new UserController({
      userModel: {
        all: td.func(),
      },
    });
  });

  it('should get all users', async () => {
    td.when(userController.userModel.all()).thenReturn([
      { id: 1 }
    ]);

    const users = await userController.index();

    expect(users).to.be.eql([
      { id: 1 }
    ]);
  });
});
