//routes /, /about, /contact
const { Router } = require('express')
const router = Router()
const petService = require('../services/petService')
    /*
    router.get('/pets', (req, res) => {
        res.render('home', { pets: [] })
    });
    */

    let multer = require('multer');
    const fs = require('fs')
    const path = require('path')

    const upload = multer({dest: "public/files"})

router.get('/AddPet', (req, res) => {

    res.cookie("message", "hello")
    res.render('addPet')


});

router.post('/AddPet', upload.single('upload'), (req, res, next) => {
    
    //console.log(req)



    console.log(req)
    /*let obj = { 
        name: req.body.name,
        description: req.body.description,
        breed:  req.body.breed,
        image: {
            data: fs.readFileSync(path.join('./uploads/' + req.files.upload.name)), 
            contentType: 'image/png'
        }
    }*/

    //console.log(obj)
    /*
    petService.create(obj).then((error, item) => {
        if(error) {
            console.log(error)
        } else {
            res.redirect('/')
        }
    }).catch(next)
    */
});

module.exports = router