
const User = require("../models/usuarios");

exports.getLogin = (req, res, next) => {
    
    console.log(process.env.DB_USER);
    res.render('auth/login', {
        pageTitle: 'GIH Tools | Login',
        messageError: ''
    });
}

exports.postLogin = (req, res, next) => {
    const user = req.body.user;
    const password = req.body.password;

    User.findOne({where: {username: user}}).then(result => {
        console.log(result);
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

        res.render('layout/home', {
            pageTitle: 'GIH Tools | Home',
            user: user
        });

    }).catch(err => console.log(err));

}
