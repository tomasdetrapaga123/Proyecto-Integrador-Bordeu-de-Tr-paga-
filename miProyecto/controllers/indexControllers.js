const dataGeneral = require('../db/generalData')

const controladores = {
    index:function(req, res, next) {
        const novedades = dataGeneral.products;
        const masComentados = [novedades[0], novedades[1], novedades[2], novedades[3]];
        return res.render('index', { title: 'Express', novedades, masComentados });
    },

    register:function(req, res) {
        return res.render('register', { title: 'Register'});
    },

    login:function(req, res) {
        return res.render('login', { title: 'login' });
    },

    search:function(req, res) {
        return res.render('search-results', { title: 'Search-Results'});
    },



}

module.exports = controladores

