const config = require('./config')

const express = require('express');
const app = express();

const pets = require('./data/pets.json')
require('./config/express')(app)
require('./config/mongoose')(app)


const routes = require('./routes')
app.use(routes) //mvc express nodejs project
const fetch = require('cross-fetch')
const asynchanlder = require('express-async-handler')

//1-connection string ✔
//2-mongoose ✔
//3-connect ✔
//4-schema + model ✔
//5-save or query data (crud) -> service ✔






async function loadPets() {
    let response = await fetch(config.DB_CONNECTION);
    return await response.json();
}

app.listen(config.development.port, () => console.log("Running server"));