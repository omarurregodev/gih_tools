const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const User = require("./models/user.model");

const MONGODB_URI =
  "mongodb+srv://gihtools:gihtoolsTest*@cluster0.lalrybp.mongodb.net/gih_tools_DB";

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

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


mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    // User.findById("64133f3523e7b4ae9b3eaafb")
    //   .then((result) => {
    //     if (!result) {
    //       const user = new User({
    //         email: "omar",
    //         password: "asd123",
    //         flag: 5,
    //       });
    //       user.save();
    //       console.log("User created.");
    //     } else {
    //       console.log("User already exist.");
    //     }
    //   })
    //   .catch((err) => console.log(err));

    const server = app.listen(PORT, () => {
      console.log(
        `Servidor http escuchando en el puerto ${server.address().port}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
