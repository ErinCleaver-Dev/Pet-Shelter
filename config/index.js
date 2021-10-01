const config = {
    development : {
        port: 8000,

    },
    production : {},
    db_name: {
        petsdb: "petsdb"
    },
    DB_CONNECTION : "mongodb://localhost:27017/petsdb",
    secret: 'ob5zdn&4BHH?JogG',
    saltRound: 11,
    cookie: 'user'
    
}

module.exports = config;