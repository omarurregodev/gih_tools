const Usuarios = require("../models/usuarios");
const Servicios = require("../models/servicios");
const Servicios_Usuario = require("../models/servicios_usuario");
const Paz_Solicitudes = require("../models/paz_solicitudes");
const Paz_Propiedades = require("../models/paz_propiedades");
const Paz_Conjuntos = require("../models/paz_conjuntos");
const sequelize = require('../utils/database');

exports.getInterfazPazSalvo = (req, res, next) => {
    
    Paz_Conjuntos.findAll().then(result_conjuntos => {
        res.render('client/solicitud_paz_salvo', {
            pageTitle: 'GIH | Generacion de certificado',
            conjuntos: result_conjuntos
        })
    }).catch(err => console.log(err));

}

exports.validarPagoPazSalvo = (req, res, next) => {
    estado = req.query.estado

    if (estado == 1) {
        inserccion = {
            fecha_envio:null,
            id_conjunto:1,
            id_propiedad:1,
            estado:0,
            id_transaccion:'123qwe',
            pasarela:'PAYU',
            monto:15000,
            moneda:"COP",
        };
        Paz_Solicitudes.create(inserccion).then(inserccion => {
            res.json({estado:true,mensaje:"El pago fue aceptado, para conocer el estado de tu solicitud de paz y salvo ingresa a http://localhost:8000/validar_estado_paz_y_salvo?id_solicitud="+inserccion.id});
        }).catch(err => console.log(err));
    } else {
        res.json({estado:false,mensaje:"Ocurrio un error con el pago, intenta nuevamente"});
    }

}

exports.validarEstadoPazSalvo = (req, res, next) => {
    id_solicitud = req.query.id_solicitud

    Paz_Solicitudes.findOne({where: {
        id:id_solicitud
    }}).then(result_solicitud => {
        response = {estado:'',data:[]};

        if (!result_solicitud) {
            response.estado = false;
            response.data = {mensaje:'Solicitud '+id_solicitud+' no existente'};
            res.json(response)
        } else {
            response.estado = true;
            switch (result_solicitud.estado) {
                case 0:
                    response.data = {mensaje:'La solicitud '+id_solicitud+' siguen en estado pendiente de aprobacion por el administrador del conjunto'};
                break;
                    
                case 1:
                    response.data = {mensaje:'La solicitud '+id_solicitud+' ha sido aprobada, prosigue con su descarga aqui http://localhost:8000/formato.pdf'};    
                break;
            
                default:
                    response.data = {mensaje:'La solicitud '+id_solicitud+' siguen en estado pendiente de aprobacion por el administrador del conjunto'};
                break;
            }
            res.json(response)
        }

    }).catch(err => console.log(err));
    

}

exports.validarPazSalvo = (req, res, next) => {

    conjunto       = req.body.conjunto;
    nombre         = req.body.nombre;
    identificacion = req.body.identificacion;
    correo         = req.body.correo;
    celular        = req.body.celular;
    numero_apto    = req.body.numero_apto;
    garaje         = req.body.garaje;
    deposito       = req.body.deposito;

    Paz_Propiedades.findOne({where: {
        id_conjunto:conjunto,
        cedula_propietario:identificacion,
        celular_propietario:celular,
        tipo_propiedad:'apartamento',
        numero_propiedad:numero_apto,
    }}).then(result_propiedad => {
        response = {estado:'',data:[]};

        if (!result_propiedad) {
            response.estado = false;
            response.data = {mensaje:'No se encontro coincidencia de la informacion'};
            res.json(response)
        } else {
            //Generacion de codigo
            const characters = '0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            codigo = '';
            while (counter < 6) {
                codigo += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            response.data = {codigo:codigo};
            response.estado = true;
            res.json(response)
        }

    }).catch(err => console.log(err));
}