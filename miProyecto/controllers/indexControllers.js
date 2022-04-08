const dataGeneral = require('../db/generalData')

const controladores = {
    index:function(req, res, next) {
        return res.render('index', { title: 'Express' });
    },

    register:function(req, res) {
        return res.render('register', { title: 'Register'})
    },

    login:function(req, res) {
        return res.render('login', { title: 'login' })
    },

    search:function(req, res) {
        return res.render('search-results', { title: 'Search-Results'})
    },



}

module.exports = controladores