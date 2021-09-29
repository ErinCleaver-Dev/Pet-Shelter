const User = require('../models/User')
const {verifyToken} =require('./jwt')
const config = require('../config/index')
const { localStorage } = require('node-localstorage').LocalStorage;

// authentication middleware
module.exports = (req, res, next) => {
        const token = req.cookies[config.cookies] || '';
        if(!token) {
            next();
            return;
        } else {
            verifyToken(token)
            .then(({_id})=> { User.findOne({_id})
                .then (({username, _id})=> {
                    req.user = {username, _id}
                    res.locals.isLoggedIn = Boolean(_id);
                    res.locals.username = username;

                    next();
                })
            }).catch((e) => next(e));
        }
    }