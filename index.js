const express = require('express');
const pets = require('./data/pets.json')
const app = express();
const port =8080;
const cors = require('cors')()
const bp = require('body-parser')
const fetch = require('cross-fetch')
const asynchanlder = require('express-async-handler')
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionsStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionsStr);

client.connect((error) => {
    if(error) 
    {throw new Error(error)} 
    const db = client.db('petsdb');
    const pets = db.collection('pets');

})



app.use(bp.json())

async function loadPets() {
    let response =await fetch('http://localhost:8080/pets');
    return await response.json();
}


app.get('/pets', (req, res)=> {
  res.status(200);
  res.json(pets);
})


app.get('/loadpets', async (req, res) => {
  res.status(200);
  console.log(pets2)
  res.json(pets2)
})



app.set('views', __dirname + '/views');
app.use(express.static('public'))
// view engine, set view engine (files, instance)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', async (req, res) => {
    res.status(200);
    let pets2 = await loadPets();
    res.render('home', {pets:pets2});
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
    res.render('addBreed');
})

app.listen(port, () => console.log("Running server"));