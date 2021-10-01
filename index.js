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

/*
app.get('/pets', (req, res) => {
    res.status(200);
    res.json(pets);
})

app.get('/loadpets', async(req, res) => {
    res.status(200);
    console.log(pets2)
    res.json(pets2)
})

app.get('/', async(req, res) => {
    res.status(200);
    let pets2 = await loadPets();
    res.render('home', { pets: pets2 });
})

app.get('/edit', (req, res) => {
    res.status(200);
    res.render('edit');
})

app.get('/delete', (req, res) => {
    res.status(200);
    res.render('delete');
})

app.get('/AddPet', (req, res) => {
    res.status(200);
    res.render('addPet');
})

app.get('/AddBreed', (req, res) => {
    res.status(200);
    res.render('addBreed', { name: "" });
})*/

app.listen(config.development.port, () => console.log("Running server"));