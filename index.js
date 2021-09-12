const express = require('express');
const app = express();
const port =3000;

app.set('views', __dirname + '/views');
app.use(express.static('public'))
// view engine, set view engine (files, instance)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
    res.status(200);
    res.render('home');
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
    res.render('AddBreed');
})



app.listen(port, () => console.log("Running server"));