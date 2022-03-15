const router = require('express').Router();

const userRoutes = require('./user-routes');
const reservationRoutes = require('./reservation-routes');

router.use('/users', userRoutes);
router.use('/reservations', reservationRoutes);



module.exports = router;