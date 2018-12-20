class UserController {
  
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  index() {
    return this.userModel.all();
  }
}

module.exports = UserController;
