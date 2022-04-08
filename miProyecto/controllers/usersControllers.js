const dataGeneral = require('../db/generalData')

const controllers = {

        profile: function(req, res, next) {
            return res.render('profile', {user:dataGeneral.user, products:dataGeneral.product });

        },

        profileEdit: function(req, res) {
            return res.render('profile-edit', { user:dataGeneral.user});
        },

}

module.exports = controllers