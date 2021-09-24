const {Router} = require('express')

const router = Router();

router.get('/login', (req, res) => {
    res.status(200);
    res.render('login');

})

router.get('/register', (req, res) => {
    res.status(200);
    console.log("login")

    res.render('register');

})

module.exports = router;