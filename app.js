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
const clientRoutes = require("./routes/client.routes");

//middleware for routes
app.use(authRoutes);
app.use(toolsRoutes);
app.use(clientRoutes);

//Config database
// const {Sequelize} = require("sequelize");
const sequelize = require('./utils/database');

// Requering the models

const User = require("./models/usuarios");

app.use((req, res, next) => {
  User.findByPk(1).then(user => {
    req.user = user;
    next();
  }).catch(err => console.log(err));
})

// sequelize.authenticate().then(() => {
// 	console.log('Connection has been established successfully.');
//  }).catch((error) => {
// 	console.error('Unable to connect to the database: ', error);
//  });


// sequelize.sync({ force: false }).then(function () { 
   
// 	app.listen(PORT, function () {    
// 		console.log(
// 			`Servidor http escuchando en el puerto ${PORT}`
// 		  ); 
// 	});
// });

sequelize.sync().then((result) => {
  return User.findByPk(1);
}).then(user => {
  if (!user) {
    return User.create({username: 'omar', correo: 'omar@gmail.com', password: 'asd123', nombre: 'testName', estado: 1})
  }
  return user
}).then(user => {
  app.listen(PORT, function () {    
    		console.log(
    			`Servidor http escuchando en el puerto ${PORT}`
    		  ); 
    	});
}).catch((err) => {
  console.log(err);
});