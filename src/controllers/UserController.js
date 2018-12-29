class UserController {
  
  constructor({ userService }) {
    this.userService = userService;
  }

  index() {
    return this.userService.all();
  }
}

module.exports = UserController;
