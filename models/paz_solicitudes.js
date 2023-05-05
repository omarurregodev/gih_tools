const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Paz_Solicitudes = sequelize.define("paz_solicitudes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fecha: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  fecha_envio: {
    type: Sequelize.DATE,
  },
  id_conjunto: {
    type: Sequelize.INTEGER,
  },
  id_propiedad: {
    type: Sequelize.INTEGER,
  },
  estado: {
    type: Sequelize.INTEGER,
  },
  id_transaccion: {
    type: Sequelize.STRING(40),
  },
  pasarela: {
    type: Sequelize.STRING(40),
  },
  monto: {
    type: Sequelize.FLOAT,
  },
  moneda: {
    type: Sequelize.STRING(5),
  }
},{
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

module.exports = Paz_Solicitudes;