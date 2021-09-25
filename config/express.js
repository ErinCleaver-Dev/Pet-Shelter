const express = require('express');
const cors = require('cors')()
const bp = require('body-parser')
const cp = require('cookie-parser')
const session = require('express-session');
const bcrypt = require('bcrypt')
const passwordUnscure = "pass123"
const config = require('./')

const setupExpress = (app) => {
    app.use(bp.urlencoded({extended : false}))
    app.use(bp.json())
    //app.set('views', __dirname + '/views');
    app.use(express.static('public'))
    // view engine, set view engine (files, instance)
    app.set('view engine', 'jsx')
    app.engine('jsx', require('express-react-views').createEngine());
    const formData = require('express-form-data');
    app.use(formData.parse())
    app.use(express.json())
    app.use(cp());
    app.use(session({secret: 'fosureowafdvcx'}, {httpOnly: true}, {secure: true}))
    /*bcrypt.genSaltSync(config.saltRound, (error, salt) => {
        bcrypt.hash(passwordUnscure, salt, (error, hash) => {
            console.log(passwordUnscure)
            hashPassword = hash;
        })
    }).then(hash=> {
        if(passwordUnscure === hashPassword) {
            console.log('password is true')
        } else {
            console.log('incorrct password or username');
        }
    })*/

    const salt = bcrypt.genSaltSync(config.saltRound);
}

module.exports = setupExpress;