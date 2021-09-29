const {Router} = require('express')
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const router = Router();
const config = require('../../config/index')
const {check, validationResult} = require('express-validator/check')


router.post('/api/register', (req, res, next) => {
    const {username, password} = {...req.body};

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


module.exports = router;