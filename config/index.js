const config = {
    development : {
        port: 3000,

    },
    production : {},
    db_name: {
        petsdb: "petsdb"
    },
    DB_CONNECTION : "mongodb://localhost:27017/petsdb"
    
}

module.exports = config;