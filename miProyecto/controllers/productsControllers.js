const dataGeneral = require('../db/generalData')
const db = require('../database/models')
const controladores = {

    products: function (req, res) {
        let id = req.params.id
        db.Product.findByPk(id, {
            include: [
                {
                    association: 'comment',
                    include: {
                        association: 'user'
                    }
                },
                {
                    association: 'user'
                }


            ]
        }).then(producto => {
            // return res.send(producto) 
            return res.render('product', {
                producto: producto
            });
        })



    },

    productAdd: function (req, res) {
        return res.render('product-add', { user: dataGeneral.user })
    },

    productCreate: function (req, res) { 
        console.log(req.body.shirt_name);
        return res.render('product-add', { user: dataGeneral.user })
    }

}

module.exports = controladores


