const config = {
    development: {
        port: 5000
    },
    production: {},
    DB_CONNECTION: "mongodb://localhost:27017/petsdb",
    saltRounds: 11,
    secret: 'ob5zdn&4BHH?JogG',
    cookie: 'x-auth-token'
}

module.exports = config