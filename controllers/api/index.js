const router = require('express').Router();

const userRoutes = require('./user-routes');
const resRoutes = require('./reservation-routes');

router.use('/users', userRoutes);
router.use('/reservations', resRoutes);

module.exports = router;