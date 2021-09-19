const {Router} = require('express')

const router = Router();

router.get('/delete', (req, res) => {
    res.status(200);
    res.render('delete');
})


module.exports = router;
