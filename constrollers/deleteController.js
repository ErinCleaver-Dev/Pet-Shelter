const {Router} = require('express')

const router = Router();

const petService = require('../services/petService')

router.get('/delete/:id', (req, res) => {
    res.status(200);
    
    const id = req.params.id.replace(":id=", '')
    petService.getId(id).then((pet) => {
        res.render('delete', {pet : pet});
    }).catch(() => res.status(500).end)
})

router.post('/delete/:id', (req, res) => {
    res.status(200);
    const id = req.params.id.replace(":id=", '')
    console.log("test delete pet " + id)
    petService.deletePet(id).then(
        res.redirect('/')
    ).catch(() => res.status(500).end)

})



module.exports = router;
