const dataGeneral = require('../db/generalData')

const controladores = {
    index:function(req, res) {
        const novedades = dataGeneral.products;
        const masComentados = [novedades[0], novedades[1], novedades[2], novedades[3]];

        return res.render('index', { novedades, masComentados });
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
