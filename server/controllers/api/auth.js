const { Router } = require('express')
const router = Router()
const User = require('../../models/User')
const jwt = require('../../utils/jwt')
const { cookie } = require('../../config/index')
const { check, validationResult } = require('express-validator/check')
const bcrypt = require('bcrypt')

router.post('/api/auth', [
    check('email', "please include a valid email!").isEmail(),
    check('password', "please enter a password with 6 or more characters").isLength({ min: 6 }),
], async(req, res) => {


    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = {...req.body }

    try {

        let user = await User.findOne({ email });
        //1-is there a user?
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] })
        }
        //2-validate password for the user
        const isMatched = await bcrypt.compare(password, user.password)
            //3-assume the password is invalid
        if (!isMatched) {
            return res.status(400).json({ errors: [{ msg: 'invalid credentials' }] })
        }
        //4-user is good
        const token = jwt.createApiToken(user._id);
        console.log(`generated token - ${token}`);
        res.json({ token })

    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }


    console.log('redirect test 3')


});

router.get('/api/logout', async(req, res) => {
    req.session.destroy();
    return res.status(200).json({message: 'logging you out'});
});

module.exports = router