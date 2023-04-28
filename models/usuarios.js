const { Sequelize, DataTypes } = require("sequelize");
const Usuarios = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(250),
  },
  correo: {
    type: DataTypes.STRING(250),
  },
  password: {
    type: DataTypes.STRING(250),
  },
  nombre: {
    type: DataTypes.STRING(40),
  },
  estado: {
    type: DataTypes.INTEGER,
  }
});