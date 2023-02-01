const { sequelize } = require('../services/DbServices');
const { DataTypes } = require('sequelize');

const Establecimiento = sequelize.define('establecimiento', {
    codigo_vu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nombre_est: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    latitud: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    longitud: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    este: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    norte: {
        type: DataTypes.FLOAT,
        allowNull: true,
    }
},
    {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Establecimiento;
