exports.getClientSide = (req, res, next) => {
    res.render('client/home_client', {
        pageTitle: 'GIH | Web site',
        messageError: ''
    })
}

exports.postSolicitudPP = (req, res, next) => {
    res.send({"message": "Solicitud enviada con exito"});
}