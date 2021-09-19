const config = require('./config')

const port =8080;

const express = require('express');
const app = express();
require('./config/express')(app);
require('./config/mongoose')(app);

const fetch = require('cross-fetch')
const asynchanlder = require('express-async-handler')
const mongodb = require('mongodb');
const routes = require('./routes')
//const MongoClient = mongodb.MongoClient;
//const connectionsStr = 'mongodb://localhost:27017';
//const client = new MongoClient(connectionsStr);

//1-connection string
//2-mongoose
//3-connect
//4-schema and module
//5- save or query data (crud) -> service
//

//mongoose.connect(config.DB_CONNECTION)


async function loadPets() {
    let response =await fetch(config.DB_CONNECTION);
    return await response.json();
}


app.use(routes)

app.listen(config.development.port, () => console.log("Running server"));