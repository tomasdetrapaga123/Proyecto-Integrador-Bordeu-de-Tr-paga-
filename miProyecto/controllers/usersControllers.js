const dataGeneral = require('../db/generalData')
const db = require('../database/models')

const controllers = {

    profile: function (req, res, next) {
        const novedades = dataGeneral.products;
        return res.render('profile', { user: dataGeneral.user, novedades });

    },

    profileEdit: function (req, res) {
        return res.render('profile-edit', { user: dataGeneral.user });
    },
    login: function (req, res) {
        return res.render('login');
    },
    authenticate: async function (req, res) {
        var email = req.body.email;
        var password = req.body.password;
        console.log(email);
        const user = await db.User.findOne({ where: { email: email } });
        if (user === null) {
            console.log('Not found!');
            return res.render('login');
        } else {
            console.log(user.email); 
            if (user.password === password){
                return res.render('index');
            }
        } 
        return null;
    }

}

module.exports = controllers