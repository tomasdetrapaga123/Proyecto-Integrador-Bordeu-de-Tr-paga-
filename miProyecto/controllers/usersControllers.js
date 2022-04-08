const dataGeneral = require('../db/generalData')

const controllers = {

        profile: function(req, res, next) {
            return res.render('profile', { title: 'Profile' });
        },

        profileEdit: function(req, res) {
            return res.render('profile-edit', { title: 'Profile-edit' });
        },

}

module.exports = controllers