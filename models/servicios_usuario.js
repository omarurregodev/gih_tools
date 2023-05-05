const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Servicios_Usuario = sequelize.define("servicios_usuarios", {
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
  id_servicio: {
    type: Sequelize.INTEGER,
  },
  id_usuario: {
    type: Sequelize.INTEGER,
  },
  roles: {
    type: Sequelize.STRING(255),
  }
});

module.exports = Servicios_Usuario;