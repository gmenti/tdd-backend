class UserRepository {

  constructor(database, tableName) {
    this.database = database;
    this.tableName = tableName;
  }
  
  get table() {
    return this.database(this.tableName);
  }
  
  all() {
    return this.table.get();
  }

}

module.exports = UserRepository;
