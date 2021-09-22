const express = require('express');
const cors = require('cors')()
const bp = require('body-parser')
const cp = require('cookie-parser')

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
}

module.exports = setupExpress;