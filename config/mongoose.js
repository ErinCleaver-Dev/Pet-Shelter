const mongoose = require('mongoose');

const config = require('./')

const setupMongoose = (app) => {

    mongoose.connect(config.DB_CONNECTION).then(() => {
        console.log('Database is connected');
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection failed'));
    db.on('open', console.log.bind(console, 'connection open'))

}

module.exports = setupMongoose;
