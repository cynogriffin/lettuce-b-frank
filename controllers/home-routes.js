const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
})

router.get('/reservations', (req, res) => {
    res.render('reservations');
});
module.exports = router;