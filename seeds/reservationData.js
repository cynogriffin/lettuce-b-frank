const { Reservation } = require('../models');

const reservationData = [
    {
        party_name: 'John',
        res_time: 'March 30, 2022, 6:00pm',
        user_id: 1
    },
    {
        party_name: 'Jack',
        res_time: 'March 30, 2022, 3:00pm', 
        user_id: 2
    },
    {
        party_name: 'Sara',
        res_time: 'March 30, 2022, 11:00AM',
        user_id: 3
    },
    {
        party_name: 'Jill',
        res_time: 'March 30, 2022, 2:00pm',
        user_id: 4
    },
    {
        party_name: 'Anthony',
        res_time: 'March 30, 2022, 8:30pm',
        user_id: 5
    },
];

const seedReservations = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservations;