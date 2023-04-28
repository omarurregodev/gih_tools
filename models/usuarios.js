const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Usuarios = sequelize.define("usuarios", {
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
  username: {
    type: Sequelize.STRING(250),
  },
  correo: {
    type: Sequelize.STRING(250),
  },
  password: {
    type: Sequelize.STRING(250),
  },
  nombre: {
    type: Sequelize.STRING(40),
  },
  estado: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Usuarios;