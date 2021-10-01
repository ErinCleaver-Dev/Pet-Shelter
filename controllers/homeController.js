//routes /, /about, /contact
const { Router } = require('express')
const router = Router()
const petService = require('../services/petService')


router.get('/', (req, res) => {


    console.log('isLoggedIn =>' + res.locals.isLoggedIn)


    if (typeof localStorage === "undefined" || localStorage === null) {
        var LocalStorage = require('node-localstorage').LocalStorage;
        localStorage = new LocalStorage('./scratch');
    }

    localStorage.setItem('isLoggedIn', res.locals.isLoggedIn)


    console.log(req.cookies);
    console.log(req.session);
    console.log("Session Value " + req.session.message);
    const cookiesTerms = req.cookies.cookiesTerms;
    petService.getAll().then(pets => {

        res.render('home', { pets: pets, cookiesTerms: cookiesTerms })

    }).catch(() => res.status(500).end())


});


router.get('/setCookies', (req, res) => {
    res.cookie('cookiesTerms', 'ok')
    req.session.message = "Hello"
    res.redirect('/?cookiesadded=true')
});

router.get('/clearCookies', (req, res) => {
    req.session.message = null
    res.cookie('cookiesTerms', null)
    res.redirect('/?cookiesadded=false')

});


router.get('/about', (req, res) => {
    res.send('About US')
});

module.exports = router