const {Router} = require('express')

const router = Router();

const petService = require('../services/petService')

router.post('/api/AddPet', (req, res, next) => {
    petService.create(req.body).then(() => {
        res.redirect('/');
    }).catch(next);

    console.log('testing router add pet');
})

module.exports = router;
