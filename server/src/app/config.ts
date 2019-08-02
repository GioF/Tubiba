require('dotenv').config()

const ormconfig = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
       "build/entity/**/*.js"
    ],
    "migrations": [
       "build/migration/**/*.js"
    ],
    "subscribers": [
       "build/subscriber/**/*.js"
    ],
    "cli": {
       "entitiesDir": "build/entity",
       "migrationsDir": "build/migration",
       "subscribersDir": "build/subscriber"
    }
 }

module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
       "build/entity/**/*.js"
    ],
    "migrations": [
       "build/migration/**/*.js"
    ],
    "subscribers": [
       "build/subscriber/**/*.js"
    ],
    "cli": {
       "entitiesDir": "build/entity",
       "migrationsDir": "build/migration",
       "subscribersDir": "build/subscriber"
    }
 }