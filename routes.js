const {Router} = require('express')
const router = Router();



//controllers
const homeController = require('./constrollers/homeController')
const addPetController = require('./constrollers/addPetController')
const addBreedController = require('./constrollers/addBreedController')
const editController = require('./constrollers/editController')
const deleteController = require('./constrollers/deleteController')



//instance of router

//use controller (link controller to router) 
//export router 

router.use(homeController)
router.use(addPetController)
router.use(addBreedController)
router.use(editController)
router.use(deleteController)

module.exports = router;

