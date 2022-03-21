const router = require('express').Router();
const { Reservation, User } = require('../../models')

// get all reservations
router.get('/', (req, res) => {
    Reservation.findAll({
        attributes: [
            'id',
            'party_name',
            'party_number',
            'res_date',
            'res_time'
        ],
        include: [
            {
                model: User,
                attributes: ['name', 'email', 'phone']
            }
        ],
    })
        .then(dbReservationData => res.json(dbReservationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// find reservation by party name
router.get('/:party_name', (req, res) => {
    Reservation.findOne({
        where: {
            party_name: req.params.party_name
        },
        attributes: [
            'id',
            'party_name',
            'party_number',
            'res_date',
            'res_time'
        ],
        include: [
            {
                model: User,
                attributes: ['name', 'email', 'phone']
            }
        ],
    })
        .then(dbReservationData => {
            if (!dbReservationData) {
                console.log("Wrong name");
                res.status(404).json({ message: 'No reservations found under this name' });
            }
            res.json(dbReservationData);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
});

// Create Reservation
router.post('/', (req, res) => {
    if (req.session.loggedIn){
    Reservation.create({
        party_name: req.body.party_name,
        party_number: req.body.party_number,
        res_date: req.body.res_date,
        res_time: req.body.res_time,
        user_id: req.session.user_id
    })
        .then(dbReservationData => res.json(dbReservationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(dbReservationData);
        });
    }
});

// // Update Reservation
// router.put('/:party_name', (req, res) => {
//     Reservation.update(req.body, {
//         where: {
//             party_name: req.params.party_name
//         }
//     })
//         .then(dbReservationData => {
//             if (!dbReservationData) {
//                 res.status(404).json({ message: 'No reservation found under this name' });
//                 return;
//             }
//             res.json(dbReservationData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         })
// })


// // Cancel Reservation
// router.delete('/:party_name', (req, res) => {
//     Reservation.destroy({
//         where: {
//             party_name: req.params.party_name
//         }
//     })
//         .then(dbReservationData => {
//             if (!dbReservationData) {
//                 res.status(404).json({ message: 'No reservation found with this id' });
//                 return;
//             }
//             res.json(dbReservationData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });
// });


module.exports = router;