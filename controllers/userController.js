const {Router} = require('express')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const config = require('../config/')
const router = Router();

router.get('/login', (req, res) => {
    res.status(200);
    res.render('login');

})

router.post('/login', (req, res) => {
    // console.log(req.body.username)
})

router.get('/register', (req, res) => {
    res.status(200);
    res.render('register');
})

router.post('/register', (req, res, next) => {
    let userinfo = {'username': "", 
    'password': ""};
    User
        .findOne({username})
        .then((user) => {
            if(user) {
                throw new Error("The given account is already in use...");
            } else {
                return User.create({username, password});
            }
        }).then((createdUser) => {
            res.redirect('/login')
        })
        

    const {username, password} = req.body;

})

router.get('/profile', (req, res) => {
    res.status(200);
    res.render('profile');
})


module.exports = router;