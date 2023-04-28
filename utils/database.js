const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        operationsAliases: false,
        pool: {
            max: Number(String(process.env.DB_MAX)),
            min: Number(String(process.env.DB_MIN)),
            acquire: process.env.DB_ACQUIRE,
            idle: process.env.DB_IDLE
	}
});

module.exports = sequelize;