const { sequelize } = require('../services/DbServices');
const { DataTypes } = require('sequelize');

const Poligono = sequelize.define('poligono', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    codigo_vu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
},
    {
        freezeTableName: true, timestamps: false
    });

module.exports = Poligono;