const User = require('../models/User')
const { secret } = require('../config/index')
const { verifyToken } = require('./jwt')
const { cookie } = require('../config/index')

//authentication middleware
module.exports = (req, res, next) => {
    const token = req.cookies[cookie] || '';

    if (!token) {
        next();
        return;
    }

    verifyToken(token)
        .then(({ _id }) => User.findOne({ _id })
            .then(({ email, fullName, _id }) => {
                req.user = { email, fullName, _id };
                res.locals.isLoggedIn = Boolean(email);
                res.locals.fullname = fullName;
                next();
            }))
        .catch((e) => next(e));
}