const { Router } = require('express')
const router = Router()
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const { cookie } = require('../../config/index')
const { check, validationResult } = require('express-validator/check')


router.post('/api/register', [
    check('email', "please include a valid email!").isEmail(),
    check('fullName', "please include a valid fullName!").not().isEmpty(),
    check('password', "please enter a password with 6 or more characters").isLength({ min: 6 }),
], async(req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullName, email, password } = {...req.body }

    User
        .findOne({ email })
        .then((user) => {

            if (user) {
                const msg = 'The given email is already in use...';
                return res.status(400).json({ errors: msg })

            } else {

                return User.create({ email, fullName, password })
            }

        }).then((createdUser) => {

            //
            const token = jwt.createToken(createdUser._id);
            //sign in user using token
            //return the token
            res.json({ token })
                //  console.log(`generated token ${token}`);
                //  res
                //  .status(200)
                //  .cookie(cookie, token, { maxAge: 3600000 })
                // .redirect(`/user/profile`)
                //
        }).catch((e) => {
            
            console.log(e);
            res.status(500).send(e.message);
        })

    console.log('redirect test 3')


});







module.exports = router