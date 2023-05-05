const Usuarios = require("../models/usuarios");
const Servicios = require("../models/servicios");
const Servicios_Usuario = require("../models/servicios_usuario");
const Paz_Solicitudes = require("../models/paz_solicitudes");
const Paz_Propiedades = require("../models/paz_propiedades");
const Paz_Conjuntos = require("../models/paz_conjuntos");
const sequelize = require('../utils/database');

exports.getClientSide = (req, res, next) => {
    
    Paz_Conjuntos.findAll().then(result_conjuntos => {
        res.render('client/home_client', {
            pageTitle: 'GIH | Generacion de certificado',
            conjuntos: result_conjuntos
        })
    }).catch(err => console.log(err));

}

exports.postSolicitudPP = (req, res, next) => {
    res.send({"message": "Solicitud enviada con exito"});
}