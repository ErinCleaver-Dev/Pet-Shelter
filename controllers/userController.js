const {Router} = require('express')
const User = require('../models/User')
const jwt = require('../utils/jwt')
const router = Router();
const config = require('../config/index')

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
                user.comparePasswords(password), user
            ]);
        })
        .then((returnedUserInfo)=>{
            if(returnedUserInfo[0] == false) {
                throw new Error(`Invalid password`);
            } else if(returnedUserInfo[0]) {
                const user = returnedUserInfo[1]
                console.log("line 30: ", user._id)
                const token = jwt.createToken(user._id);
                console.log(`generate token ${token}`);
                res
                    .status(200)
                    .cookie(config.cookie, token, {maxAge: 60*60*24*30})
                    .redirect('/profile')
            }
        })
        .catch((e) => {
            console.log(e);
            res.redirect(`/login?error=${e.Error}`)
        })
        

})

router.get('/logout', (req, res) => {
    res.clearCookie(config.cookie)
        .redirect('/')

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