const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8000;

// Template engine running
app.set('view engine', 'ejs');
app.set('views', 'views');

// Getting routes
const authRoutes = require('./routes/auth.routes');

app.use(authRoutes);

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));