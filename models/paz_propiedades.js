const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Paz_Propiedades = sequelize.define("paz_propiedades", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  id_conjunto: {
    type: Sequelize.INTEGER,
  },
  cedula_propietario: {
    type: Sequelize.STRING(40),
  },
  nombre_propietario: {
    type: Sequelize.STRING(40),
  },
  correo_propietario: {
    type: Sequelize.STRING(40),
  },
  manzana_propiedad: {
    type: Sequelize.STRING(40),
  },
  torre_propiedad: {
    type: Sequelize.STRING(40),
  },
  apartamento_propiedad: {
    type: Sequelize.STRING(40),
  },
  estado: {
    type: Sequelize.INTEGER,
  }
},{
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Paz_Propiedades;