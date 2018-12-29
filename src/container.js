const knex = require('knex');
const settings = require('./settings');

// import services
const UserService = require('./services/UserService');

// import repositories
const UserRepository = require('./repositories/UserRepository');

// create database
const database = knex({
    client: settings.DB_CLIENT,
    debug: false,
    connection: {
      host: settings.DB_HOST,
      user: settings.DB_USERNAME,
      password: settings.DB_PASSWORD,
      database: settings.DB_DATABASE,
      supportBigNumbers: true,
      bigNumberStrings: true,
      multipleStatements: true,
      timezone: 'UTC',
      dateStrings: true,
    },
    pool: {
      min: settings.DB_POOL_MIN,
      max: settings.DB_POOL_MAX,
    },
});

// create repositories
const userRepository = new UserRepository(database);

// create services
const userService = new UserService(userRepository);

module.exports = {
    userService,
};
