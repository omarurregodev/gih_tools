
const Usuarios = require("../models/usuarios");
const Servicios = require("../models/servicios");
const Servicios_Usuario = require("../models/servicios_usuario");

exports.getLogin = (req, res, next) => {
    
    res.render('auth/login', {
        pageTitle: 'GIH Tools | Login',
        messageError: ''
    });
}

exports.postLogin = (req, res, next) => {
    const user = req.body.user;
    const password = req.body.password;

    Usuarios.findOne({where: {username: user}}).then(result => {
        if (!result) {
            return res.render('auth/login', {
                messageError: 'Usuario no existe!',
                pageTitle: 'GIH Tools | Login'
            });
        }

        if (result.password !== password) {
            return res.render('auth/login', {
                messageError: 'La contraseña ingresada es incorrecta!',
                pageTitle: 'GIH Tools | Login'
            });
        }

        Servicios.findAll().then(result_servicios => {
            console.log(result_servicios);
            consolidado_servicios = [];
            result_servicios.forEach(function(servicio){
                consolidado_servicios['servicio'+servicio.id] = {
                    nombre_servicio     : servicio.nombre_servicio,
                    descripcion_servicio: servicio.descripcion_servicio,
                    estado              : servicio.estado
                };
            });
            Servicios_Usuario.findAll({where: {id_usuario:  1}}).then(result_servicios_usuario => {
                result_servicios_usuario.forEach(function(detalle_servicio,key){
                    result_servicios_usuario[key].estado               = 0;
                    result_servicios_usuario[key].nombre_servicio      = '';
                    result_servicios_usuario[key].descripcion_servicio = '';

                    if(consolidado_servicios.hasOwnProperty('servicio'+detalle_servicio.id_servicio)){
                        result_servicios_usuario[key].estado               = consolidado_servicios['servicio'+detalle_servicio.id].estado;
                        result_servicios_usuario[key].nombre_servicio      = consolidado_servicios['servicio'+detalle_servicio.id].nombre_servicio;
                        result_servicios_usuario[key].descripcion_servicio = consolidado_servicios['servicio'+detalle_servicio.id].descripcion_servicio;
                    }
                    console.log(result_servicios_usuario);
                }); 
                res.render('layout/home', {
                    pageTitle: 'GIH Tools | Home',
                    user: result,
                    servicios: result_servicios_usuario,
                });
            }).catch(err => console.log(err));
        }).catch(err => console.log(err));


    }).catch(err => console.log(err));

}
