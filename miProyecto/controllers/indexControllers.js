const dataGeneral = require('../db/generalData')

const controladores = {
    index:function(req, res, next) {
        const novedades = dataGeneral.products;

        return res.render('index', { title: 'Express', novedades, masComentados: [dataGeneral.products[0], dataGeneral.products[1], dataGeneral.products[2], dataGeneral.products[3]]});
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

