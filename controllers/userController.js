const {Router} = require('express')
const User = require('../models/User')
const router = Router();

router.get('/login', (req, res) => {
    res.status(200);
    res.render('login');

})

router.post('/login', (req, res) => {
    // console.log(req.body.username)
    const {username, password} = req.body;

    User
        .findOne({username})
        .then((user) => {
            return Promise.all([
                user.comparePasswords(password)
            ]);
        })
        .then((isValidPassword, user)=>{
            console.log("testing validation: " + isValidPassword)
            if(isValidPassword === false) {
                throw new Error(`Invalid password`);
            } else {
                // redirect -> generate token (jwt)
                res.redirect('/profile')
            }
        })
        .catch((e) => {
            console.log(e);
            res.redirect(`/login?error=${e.Error}`)
        })
        

})

router.get('/register', (req, res) => {
    res.status(200);
    res.render('register');
})

router.post('/register', (req, res, next) => {
    const {username, password} = req.body;

    User
        .findOne({username})
        .then((user) => {
            if(user) {
                message = "The given account is already in use..."
                res.redirect(`/register?error=${message}`);
            } else {
                return User.create({username, password});
            }
        }).then((createdUser) => {
            res.redirect('/login')
        }).catch((e) => {
            console.log(e);
            res.redirect(`/register?error=${e.Error}`)
        })
        


})

router.get('/profile', (req, res) => {
    res.status(200);
    res.render('profile');
})


module.exports = router;