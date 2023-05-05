const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Servicios = sequelize.define("servicios", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  nombre_servicio: {
    type: Sequelize.STRING(40),
  },
  descripcion_servicio: {
    type: Sequelize.STRING(255),
  },
  imagen_servicio: {
    type: Sequelize.STRING(255),
  },
  estado: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Servicios;