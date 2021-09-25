const {Router} = require('express')
const userService = require('../services/userServices')
const bcrypt = require('bcrypt')
const config = require('../config/')
const router = Router();

router.get('/login', (req, res) => {
    res.status(200);
    res.render('login');

})

router.post('/login', (req, res) => {
    // console.log(req.body.username)
    userService.findUser(req.body.username).then((result) => {
    if(bcrypt.compareSync(req.body.password, result[0].password)) {
        console.log("Logged in")
        res.redirect('/');
    } else {
        console.log("user name or password incorrect");
    }
    }).catch(() => res.status(500).end)
})

router.get('/register', (req, res) => {
    res.status(200);
    res.render('register');
})

router.post('/register', (req, res, next) => {
    let userinfo = {'username': "", 
    'password': ""};
    userinfo.username= req.body.username;
    const salt = bcrypt.genSaltSync(config.saltRound);
    console.log(req.body.password)

    bcrypt.hash(req.body.password, salt).then(hash => { 
        userinfo.password = hash;
        userService.create(userinfo).then(() => {
            res.redirect('/')
        }).catch(next);
    });

})

module.exports = router;