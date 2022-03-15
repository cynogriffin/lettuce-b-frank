const { User } = require('../models');

const userData = [
    {
        name: 'John',
        email: 'johnjacobson@gmail.com',
        phone: 5555555555
    },
    {
        name: 'Jack',
        email: 'jackandjill@gmail.com',
        phone: 4444444444
    },
    {
        name: 'Sara',
        email: 'saratonin@gmail.com',
        phone: 3333333333
    },
    {
        name: 'Jill',
        email: 'jillanddrake@gmail.com',
        phone: 7777777777
    },
    {
        name: 'Anthony',
        email: 'cleolovesme@gmail.com',
        phone: 8888888888
    },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;