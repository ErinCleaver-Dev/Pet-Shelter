//routes /, /about, /contact
const { Router } = require('express')
const router = Router()
const petService = require('../services/petService')
    /*
    router.get('/pets', (req, res) => {
        res.render('home', { pets: [] })
    });
    */

router.get('/AddPet', (req, res) => {

    res.cookie("message", "hello")
    res.render('addPet')


});

router.post('/AddPet', (req, res, next) => {

    petService.create(req.body).then(() => {
        res.redirect('/')
    }).catch(next)

});

module.exports = router