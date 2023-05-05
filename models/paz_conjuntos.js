const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Paz_Conjuntos = sequelize.define("paz_conjuntos", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_usuario: {
    type: Sequelize.INTEGER,
  },
  nombre: {
    type: Sequelize.STRING(40),
  },
  ciudad: {
    type: Sequelize.STRING(40),
  },
  pais: {
    type: Sequelize.STRING(40),
  },
  direccion: {
    type: Sequelize.STRING(40),
  },
  costo_certificado: {
    type: Sequelize.FLOAT,
  },
  moneda: {
    type: Sequelize.STRING(5),
  },
  estado: {
    type: Sequelize.INTEGER,
  }
},{
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Paz_Conjuntos;