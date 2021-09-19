const {Router} = require('express')

const router = Router();

router.get('/addBreed', (req, res) => {
    res.render('addBreed');
});

module.exports = router;
