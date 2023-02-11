const { sequelize } = require('../services/DbServices');
const { DataTypes } = require('sequelize');

const PuntoReferencia = sequelize.define('punto_referencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    codigo_vu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
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

module.exports = PuntoReferencia;