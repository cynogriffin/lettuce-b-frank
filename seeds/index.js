const sequelize = require('../config/connection');
const seedReservations = require('./reservationData');
const seedUserData = require('./userData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUserData();
  
    await seedReservations();
  
    process.exit(0);
  };
  
  seedAll();