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
  celular_propietario: {
    type: Sequelize.STRING(40),
  },
  tipo_propiedad: {
    type: Sequelize.STRING(40),
  },
  numero_propiedad: {
    type: Sequelize.STRING(40),
  },
  matricula_propiedad: {
    type: Sequelize.STRING(40),
  },
  asociado: {
    type: Sequelize.STRING(10),
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