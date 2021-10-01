const { Router } = require('express')
const router = Router()
const User = require('../models/User')
const jwt = require('../utils/jwt')
const { cookie } = require('../config/index')
router.get('/user/login', (req, res) => {
    res.render('login')
});

router.get('/user/register', (req, res) => {
    res.render('register')
});

router.get('/user/logout', (req, res) => {

    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    localStorage.clear();

    res.clearCookie(cookie).redirect('/')


});

router.post('/user/register', (req, res, next) => {
    const { fullName, email, password } = {...req.body }
    User
        .findOne({ email })
        .then((user) => {

            if (user) {
                const msg = 'The given email is already in use...';
                res.redirect(`/user/register?error=${msg}`)

            } else {

                return User.create({ email, fullName, password })
            }

        }).then((createdUser) => {

            res.redirect('/user/login')
        }).catch((e) => {

            console.log(e);
            res.redirect(`/user/register?error`)
        })

    console.log('redirect test 3')


});


router.post('/user/login', (req, res, next) => {
    const { email, password } = {...req.body }
    User
        .findOne({ email }).then((user) => {

            return Promise.all([
                user.comparePasswords(password), user
            ])
        }).then((returnedPasswordAndUser) => {

            if (!returnedPasswordAndUser[0]) {
                throw new Error('Invalid password!!')
            }
            const _user = returnedPasswordAndUser[1]
                // console.log("information ", _user)
                //redirect ->generate a token (jwt)

            const token = jwt.createToken(_user._id);
            console.log(`generated token ${token}`);
            res
                .status(200)
                .cookie(cookie, token, { maxAge: 3600000 })
                .redirect(`/user/profile`)

        })
        .catch((e) => {

            console.log(e);
            res.redirect(`/user/register?error`)
        })

    console.log('redirect test 3')


});

router.get('/user/profile', (req, res) => {
    res.render('profile')
});


module.exports = router