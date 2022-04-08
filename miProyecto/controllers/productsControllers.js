const dataGeneral = require('../db/generalData')

const controladores = {

    products:function(req, res) {
        return res.render('product', { title: 'Product'})
    },

    productAdd:function (req, res) {
        return res.render('product-add', {user:dataGeneral.user})
    }

}

module.exports = controladores

