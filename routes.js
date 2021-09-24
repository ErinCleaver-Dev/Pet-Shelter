const {Router} = require('express')
const router = Router();



//controllers
const homeController = require('./controllers/homeController')
const addPetController = require('./controllers/addPetController')
const addBreedController = require('./controllers/addBreedController')
const editController = require('./controllers/editController')
const deleteController = require('./controllers/deleteController')
const userController = require('./controllers/userController')



//instance of router

//use controller (link controller to router) 
//export router 

router.use(homeController)
router.use(addPetController)
router.use(addBreedController)
router.use(editController)
router.use(deleteController)
router.use(userController)

module.exports = router;

