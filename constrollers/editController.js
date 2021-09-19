const {Router} = require('express')

const router = Router();

router.get('/edit', (req, res) => {
    res.status(200);
    res.render('edit');
})

module.exports = router;
