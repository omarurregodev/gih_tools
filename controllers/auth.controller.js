exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'GIH Tools | Login'
    });
}

exports.postLogin = (req, res, next) => {
    res.render('layout/home', {
        pageTitle: 'GIH Tools | Login'
    });
}