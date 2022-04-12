const dataGeneral = require('../db/generalData')

const controladores = {

    products:function(req, res) {
        const {id} = req.query
        const product = dataGeneral.products.find (function (product) {
            return product.id === Number(id)
        });
        
        return res.render('product', product)
        
    },

    productAdd:function (req, res) {
        return res.render('product-add', {user:dataGeneral.user})
    }

}

module.exports = controladores

