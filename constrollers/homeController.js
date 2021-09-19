const {Router} = require('express')

const router = Router();
const petService = require('../services/petService')


router.get('/', (req, res) => {
    petService.getAll().then(pets => {
        res.render('home', {pets : pets});
    }).catch(() => res.status(500).end)
});

module.exports = router;
