const {Router} = require('express')
const jwt = require('../../utils/jwt')
const router = Router();


router.post('/api/authentication', (req, res) => {
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