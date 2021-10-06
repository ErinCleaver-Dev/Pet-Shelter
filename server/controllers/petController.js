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
    let multer = require('multer');
    const fs = require('fs')
    const path = require('path')

    let storage = multer.deskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads')
        },
        filename: (req, file, cb) => {
            cb(null, file.filename + '-' + Date.now());
        }
    })

    var upload = multer({storage: storage})

    let obj = { 
        name: req.body.name,
        description: req.body.description,
        breed:  req.body.breed,
        upload: req.body.file
    }

    petService.create(req.body).then(() => {
        res.redirect('/')
    }).catch(next)

});

module.exports = router