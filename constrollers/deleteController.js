const {Router} = require('express')

const router = Router();

const petService = require('../services/petService')

router.get('/delete', (req, res) => {

    
    res.status(200);
    res.render('delete');
})


module.exports = router;
