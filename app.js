const dotenv = require("dotenv")
dotenv.config()


const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");



const app = express();


const PORT = process.env.PORT || 8000;

// Template engine running
app.set("view engine", "ejs");
app.set("views", "views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Getting routes
const authRoutes = require("./routes/auth.routes");
const toolsRoutes = require("./routes/tools.routes");

//middleware for routes
app.use(authRoutes);
app.use(toolsRoutes);

//Config database
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
const db = require("./models");

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
 }).catch((error) => {
	console.error('Unable to connect to the database: ', error);
 });


db.sequelize.sync({ force: false }).then(function () {  
	app.listen(PORT, function () {    
		console.log(
			`Servidor http escuchando en el puerto ${server.address().port}`
		  ); 
	});
});