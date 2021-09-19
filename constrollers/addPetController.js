const {Router} = require('express')

const router = Router();

router.get('/addPet', (req, res) => {
    res.render('addPet');
});

const petService = require('../services/petService')

router.post('/AddPet', (req, res, next) => {
    petService.create(req.body).then(() => {
        res.redirect('/');
    }).catch(next);
    console.log('testing send')
})

module.exports = router;
