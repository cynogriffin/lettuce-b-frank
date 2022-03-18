const { Reservation } = require('../models');

const reservationData = [
    {
        party_name: 'John',
        party_number: 12,
        res_date: 'March 30, 2022',
        res_time: '6:00pm',
        user_id: 1
    },
    {
        party_name: 'Jack',
        party_number: 2,
        res_date: 'March 30, 2022',
        res_time: '2:00pm',
        user_id: 2
    },
    {
        party_name: 'Sara',
        party_number: 5,
        res_date: 'March 30, 2022',
        res_time: '12:00pm',
        user_id: 3
    },
    {
        party_name: 'Jill',
        party_number: 6,
        res_date: 'March 30, 2022',
        res_time: '2:00pm',
        user_id: 4
    },
    {
        party_name: 'Anthony',
        party_number: 2,
        res_date: 'March 30, 2022',
        res_time: '6:00pm',
        user_id: 5
    },
];

const seedReservations = () => Reservation.bulkCreate(reservationData);

module.exports = seedReservations;