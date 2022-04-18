const dataGeneral = require('../db/generalData')

const controllers = {

        profile: function(req, res, next) {
            const novedades = dataGeneral.products;
            return res.render('profile', {user:dataGeneral.user, novedades });

        },

        profileEdit: function(req, res) {
            return res.render('profile-edit', { user:dataGeneral.user});
        },

}

module.exports = controllers