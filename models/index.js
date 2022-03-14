const User = require('./User');
const Reservation = require('./Reservation');

Reservation.belongsTo(User, {
    foreignKey: 'user_id'
}); 

module.exports = { User, Reservation };