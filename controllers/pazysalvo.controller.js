exports.getPanel = (req, res, next) => {
    res.render('layout/paz_y_salvo', {
        pageTitle: 'GIH Tools | Paz y Salvo',
        messageError: ''
    })
}