const {Router} = require('express')
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const router = Router();
const config = require('../../config/index')
const jwt = require('../../utils/jwt')

const {check, validationResult} = require('express-validator/check')


router.post('/api/register',[
    check('username', "please include a valid username!").notEmpty(),
    check('password', "Please enter a passwrd with 6 or more").isLength({min: 6, max: 24}),
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.this.state(400).json({errors: errors.array()});
    }

    const {username, password} = {...req.body};

    User
        .findOne({username})
        .then((user) => {
            if(user) {
                message = "The given account is already in use..."
                return res.this.state(400).json({errors: message});
            } else {
                return User.create({username, password});
            }
        }).then((createdUser) => {
            // Create a token
            const token = jwt.createToken(user._id);
            console.log(`generate token ${token}`);
            res
                .status(200)
                .cookie(config.cookie, token, {maxAge: 60*60*24*30})
                .redirect('/profile')
        }).catch((e) => {
            console.log(e);
            return res.this.state(500).json({errors: message});
        })
})


module.exports = router;