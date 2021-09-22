const { json } = require('body-parser');
const {Router} = require('express')

const router = Router();

const petService = require('../services/petService')


router.get('/edit/:id', (req, res) => {
    res.status(200);
    
    const id = req.params.id.replace(":id=", '')
    petService.getId(id).then((pet) => {
        res.render('edit', {pet : pet});
    }).catch(() => res.status(500).end)
})

module.exports = router;
