const { Router } = require('express')
const router = Router()
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const { cookie } = require('../../config/index')






router.post('/api/auth', (req, res, next) => {
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




module.exports = router