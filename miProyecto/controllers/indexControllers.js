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
        const products = [];
        const search = req.query.search;

        for (let index = 0; index < dataGeneral.products.length; index++) {
            const product = dataGeneral.products[index];
            if(product.name.includes(req.query.search)){
                products.push(product)
            }
            // if (products == 0) {
            //     products.push('No se encontro nada para ' +req.query.search+ '.')
            // }
            
        }
        
        return res.render('search-results', { title: 'Search-Results', products});
    },



}

module.exports = controladores

