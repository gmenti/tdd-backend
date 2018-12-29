require('dotenv').config();

module.exports = {
    BODY_LIMIT: process.env.BODY_LIMIT,
    DB_CLIENT: process.env.DB_CLIENT,
    DB_SSL: process.env.DB_SSL,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: parseInt(process.env.DB_PORT),
    DB_POOL_MIN: parseInt(process.env.DB_POOL_MIN),
    DB_POOL_MAX: parseInt(process.env.DB_POOL_MAX),
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: parseInt(process.env.PORT),
};
