const {Router} = require('express')
const router = Router();



//controllers
const homeController = require('./controllers/homeController')
const addPetController = require('./controllers/addPetController')
const addBreedController = require('./controllers/addBreedController')
const editController = require('./controllers/editController')
const deleteController = require('./controllers/deleteController')
const userController = require('./controllers/userController')
//apis
const usersController = require('./controllers/api/users')
const authController = require('./controllers/api/auth')


//instance of router

//use controller (link controller to router) 
//export router 

router.use(homeController)
router.use(addPetController)
router.use(addBreedController)
router.use(editController)
router.use(deleteController)
router.use(userController)

// api controllers.
router.use(usersController)
//router.use(authController)


module.exports = router;

