const router = require('express').Router();
const { User, Reservation } = require('../models');

// get all reservations by the current user
router.get('/', (req, res) => {
    Reservation.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'party_name',
            'party_number',
            'res_date',
            'res_time'
        ]
    })
        .then(dbResData => {
            const reservations = dbResData.map(reser => reser.get({ plain: true}));
            res.render('dashboard', { reservations, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;