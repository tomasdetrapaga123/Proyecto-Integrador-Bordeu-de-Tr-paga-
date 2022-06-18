const db = require('../database/models')
const op = db.Sequelize.Op
const controladores = {
    index: function (req, res) {
        db.Product.findAll({
            include: [
                {
                    association: 'user'
                },
                {
                    association: 'comment'
                }

            ],
            order:[
                ['created_at', 'DESC']
            ]
        })
            .then(productos => {
               //return res.send(productos)
                
                return res.render('index', { productos: productos });
            })
    },

    register: function (req, res) {
        return res.render('register', { title: 'Register' });
    },

    login: function (req, res) {
        return res.render('login', { title: 'login' });
    },

    search: function (req, res) {

        const search = req.query.search;

        db.Product.findAll({
            include: [
                {
                    association: 'user'
                },
                {
                    association: 'comment'
                }
            ], where: {
                [op.or]: [{
                    shirt_name: {
                        [op.like]: '%' + search + '%'
                    }
                }, {
                    shirt_description: {
                        [op.like]: '%' + search + '%'
                    }
                }]
            }
        })
            .then(productos => {
                //res.send(productos)
                return res.render('search-results', { title: 'Search-Results', productos: productos });
            })

    },



}

module.exports = controladores
