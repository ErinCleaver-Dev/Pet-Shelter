const { Router } = require('express')
const router = Router()
    //mvc -> Model, View, Controller
    //controllers (home,pet)
const homeController = require('./controllers/homeController')
const petController = require('./controllers/petController')
const userController = require('./controllers/userController')

//apis
const usersController = require('./controllers/api/users')
const authController = require('./controllers/api/auth')

//instance of router
//use controller (link controller to router)
//export router

router.use('/', homeController) //default controller
router.use(petController) //adding controllers
router.use(userController) //adding controllers
    //apis controllers
router.use(usersController) //adding controllers
router.use(authController) //adding controllers

/*
module.exports = (router) => {
    return routers.reduce((acc, curr) => {
        const key = Object.keys(curr)[0];
        return Object.assign(acc, {
            [key]: curr[key](router)
        });
    }, {});
};*/


module.exports = router