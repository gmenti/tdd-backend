class UserRepository {

  constructor(database, tableName) {
    this.database = database;
    this.tableName = tableName;
  }
  
  get table() {
    return this.database.table(this.tableName);
  }
  
  all() {
    return this.table.select('*').get();
  }

}

module.exports = UserRepository;
