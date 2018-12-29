class UserService {
  
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  
  all() {
    return this.userRepository.all();
  }
}

module.exports = UserService;
