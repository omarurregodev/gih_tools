const dotenv = require("dotenv")
dotenv.config()


const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");


const app = express();

app.use(cookieParser());
 
app.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: true
}));

const PORT = process.env.PORT || 8000;

// Template engine running
app.set("view engine", "ejs");
app.set("views", "views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Getting routes
const authRoutes = require("./routes/auth.routes");
const pasysalvoRoutes = require("./routes/pazysalvo.routes");
const clientRoutes = require("./routes/client.routes");

//middleware for routes
app.use(authRoutes);
app.use(pasysalvoRoutes);
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