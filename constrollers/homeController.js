const {Router} = require('express')

const router = Router();
const petService = require('../services/petService')


router.get('/', (req, res) => {
    console.log(req.cookies)
    const notice = req.cookies.notice;

    petService.getAll().then(pets => {
        res.render('home', {pets : pets, notice: notice});
    }).catch(() => res.status(500).end)
});

router.get('/clearCookies', (req, res) => {
    res.cookie("notice", null);
    res.redirect('/?clearCookies=true');
})
router.get('/agreeCookie', (req, res) => {
    res.cookie("notice", "yes");
    res.redirect('/');
})

module.exports = router;
