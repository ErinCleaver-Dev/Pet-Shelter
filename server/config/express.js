const express = require('express');
const cors = require('cors')
const bp = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const config = require('./index')
const bcrypt = require('bcrypt')
const auth = require('../utils/auth')
const fs = require('fs')
const path = require('path')

function setupExpress(app) {
    app.use(bp.urlencoded({ extended: false }))

    app.use(bp.json())

    app.use(cors())
        // app.set('views', __dirname + '/views');
    app.use(express.static('public'))
        // view engine, set view engine (files, instance)
    app.set('view engine', 'jsx')
    app.engine('jsx', require('express-react-views').createEngine());

    const formData = require('express-form-data')
    app.use(formData.parse())
    app.use(express.json())
    app.use(cookieParser())
    app.use(session({ secret: 'faemskjnasfkojn' }, { httpOnly: true }, { secure: true }))
    app.use(auth)
    const password = 'pass123'
        //encrypt - make the password unreadable
        //salt
    const salt = bcrypt.genSaltSync(config.saltRounds);
    bcrypt.hash(password, salt).then(hash => {
            console.log(`Password { ${password} - Hashed One { ${hash}}}`);
            //$2b$11$7A.U.peyMv03xKOfc./x1ui79MClxrcSw4RuFLWEwRbOZY/Xumyze -> pass123
            //$2b$11$V4alVDn6D4egxA2V4B/hEua88kGlMsyyi9yE/lfCjMjicdWVd0e7O -> pass123
            //$2b$11$mW/aQx9FVv3P4ovckQ6ofORPhpPYMNFGHW6v2mxRIGhhE9r6vUa/S -> pass123

        })
        //decrypt - retrieve it back to its initial value

    bcrypt.compare(password, '$2b$11$V4alVDn6D4egxA2V4B/hEua88kGlMsyyi9yE/lfCjMjicdWVd0e7O', (err, res) => {
        if (res) {
            console.log('password is Matched!!')
                //login the user
        } else {
            console.log('incorrct username or password :(');
            //redirect the user to home page
        }
    })

}

module.exports = setupExpress