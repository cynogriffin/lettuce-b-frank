const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates reservation model
class Reservation extends Model {}

// define reservation table
Reservation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        party_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        party_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        res_date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDate: true
            },
        },
        res_time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'reservation'
    }
);

module.exports = Reservation;