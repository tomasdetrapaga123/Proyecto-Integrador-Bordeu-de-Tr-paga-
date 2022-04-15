const dataGeneral = require('../db/generalData')

const controladores = {

    products:function(req, res) {
        const comments = dataGeneral.comments
        const product = dataGeneral.products[0];
        return res.render('product', {
            id: product.id, 
            name: product.name, 
            description: product.description,
            imageName: product.imageName,
            comments
         });
        
    },

    productAdd:function (req, res) {
        return res.render('product-add', {user:dataGeneral.user})
    }

}

module.exports = controladores


