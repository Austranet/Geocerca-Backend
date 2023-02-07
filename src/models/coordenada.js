const { sequelize } = require('../services/DbServices');
const { DataTypes } = require('sequelize');

const Coordenada = sequelize.define('coordenada', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id_poligono: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    codigo_vu: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    latitud: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    longitud: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    este: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    norte: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Coordenada;
