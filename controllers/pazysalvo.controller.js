const Usuarios = require("../models/usuarios");
const Servicios = require("../models/servicios");
const Servicios_Usuario = require("../models/servicios_usuario");
const Paz_Solicitudes = require("../models/paz_solicitudes");
const Paz_Propiedades = require("../models/paz_propiedades");
const Paz_Conjuntos = require("../models/paz_conjuntos");
const sequelize = require('../utils/database');

exports.getPanel = (req, res, next) => {

    id_usuario  = req.session.user.id;
    
    Paz_Conjuntos.findOne({where: {id_usuario:  id_usuario}}).then(result_conjuntos => {
        query_solicitudes = `select ps.id as id_registro,DATE_FORMAT(ps.fecha,'%Y-%m-%d %H:%i:%s' ) AS fecha,IFNULL(DATE_FORMAT(ps.fecha_envio,'%Y-%m-%d %H:%i:%s' ),null) as fecha_envio,ps.id_propiedad,ps.estado,ps.id_transaccion,ps.monto ,pp.cedula_propietario ,pp.nombre_propietario ,pp.correo_propietario ,pp.numero_propiedad ,pc.nombre_conjunto
        from paz_solicitudes ps
        inner join paz_propiedades pp on pp.id_conjunto=ps.id_conjunto and pp.id =ps.id_propiedad
        inner join paz_conjuntos pc  on pc.id =pp.id_conjunto  
        where pc.id_usuario = `+id_usuario+`
        order by ps.estado ,ps.fecha`;
    
        sequelize.query(query_solicitudes).then(result_solicitudes => {
            solicitudes_pendientes = [];
            solicitudes_enviadas   = [];
            result_solicitudes[0].forEach(function(solicitud){
                switch (solicitud.estado) {
                    case 0:
                        solicitudes_pendientes.push(solicitud);
                    break;
                    case 1:
                        solicitudes_enviadas.push(solicitud);
                    break;
                }
            });
            
            res.render('layout/paz_y_salvo', {
                pageTitle             : 'GIH Tools | Paz y Salvo',
                solicitudes_pendientes: solicitudes_pendientes,
                solicitudes_enviadas  : solicitudes_enviadas,
                user                  : req.session.user,
                conjunto              : result_conjuntos
            })
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));

}

exports.editarSolicitud = (req, res, next) => {

    id_usuario   = req.session.user.id;
    id_solicitud = req.body.id_solicitud;
    tipo         = req.body.tipo;
    estado       = (tipo == 'aprobar') ? 1: 0;
    fecha_envio  =  new Date().toISOString();;
    
    Paz_Solicitudes.findOne({where: {id:  id_solicitud,}}).then(result_solicitud => {
        response = {estado:'',mensaje:''};

        if(!result_solicitud){
            response.estado = false;
            response.mensaje = 'Solicitud '+id_solicitud+' no existente';
            res.json(response);
        }else{
            Paz_Solicitudes.update({ estado: estado, fecha_envio:fecha_envio }, { where: { id: id_solicitud }, returning: true, plain: true }) .then(function (result_update) {
                console.log(result_update);
                response.estado = true;
                response.mensaje = 'Solicitud '+id_solicitud+' actualizada';
                res.json(response);
            }).catch(err => console.log(err));;
        }
    }).catch(err => console.log(err));
}