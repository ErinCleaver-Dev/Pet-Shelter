const { Router } = require('express')
const router = Router()
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const bcrypt  = require('bcrypt')
const { cookie } = require('../../config/index')
const { check, validationResult } = require('express-validator/check')


router.post('/api/user', [
    check('email', "please include a valid email!").isEmail(),
    check('password', "please enter a password with 6 or more characters").isLength({ min: 6 }),
], async(req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = {...req.body }
    try {
        let user = await User.findOne({ email: email});
        let errorMessage = "Invaild credentials"
        //First check if their is a user
        if(!user) {
            return res.status(400).json({ errors: [{msg: errorMessage}]}) 
        }
        //Secound check if their is a user
        const isMatched = await bcrypt().compare(password, user.password)
        //Third assume inaild password 
        if(!isMatched) {
            return res.status(400).json({ errors: [{msg: errorMessage}]}) 
        } 
        //4-user is logged in
        else {
             const token = jwt.createApiToken(user._id);

        }
       
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error")
    }

    console.log('redirect test 3')


});







module.exports = router