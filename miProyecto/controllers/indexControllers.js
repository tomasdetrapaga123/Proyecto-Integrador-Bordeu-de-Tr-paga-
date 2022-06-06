const dataGeneral = require('../db/generalData')
const db = require('../database/models')
const controladores = {
    index:function(req, res) {
        db.Product.findAll({
            include:[
                {
                association:'user'
            },
            {
                association:'comment'
            }
        ]
        })
        .then(productos=>{
           // return res.send(productos)
            return res.render('index', { productos:productos});
        })
       

       
        
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
            
            
        }
        
        return res.render('search-results', { title: 'Search-Results', products});
    },



}

module.exports = controladores
