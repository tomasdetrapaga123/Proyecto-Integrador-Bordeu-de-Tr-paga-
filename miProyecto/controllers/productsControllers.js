const dataGeneral = require('../db/generalData')

const controladores = {

    products:function(req, res) {
        const {id} = req.params
        const product = dataGeneral.products.find (function (product) {
            return product.id === Number(id)
        });
        console.log(product)
        return res.render('product', { title: 'Product'})
        
    },

    productAdd:function (req, res) {
        return res.render('product-add', {user:dataGeneral.user})
    }

}

module.exports = controladores

