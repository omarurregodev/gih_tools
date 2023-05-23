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
  nombre_conjunto: {
    type: Sequelize.STRING(40),
  },
  ciudad_conjunto: {
    type: Sequelize.STRING(40),
  },
  pais_conjunto: {
    type: Sequelize.STRING(40),
  },
  direccion_conjunto: {
    type: Sequelize.STRING(40),
  },
  georeferencia_conjunto: {
    type: Sequelize.STRING(200),
  },
  cedula_administrador: {
    type: Sequelize.STRING(40),
  },
  nombre_administrador: {
    type: Sequelize.STRING(40),
  },
  costo_certificado_conjunto: {
    type: Sequelize.FLOAT,
  },
  moneda_conjunto: {
    type: Sequelize.STRING(5),
  },
  estado: {
    type: Sequelize.INTEGER,
  }
},{
  timestamps: false,
  createdAt: true,
  updatedAt: false
});

module.exports = Paz_Conjuntos;