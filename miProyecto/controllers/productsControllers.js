const data = require('../db/generalData');
const dataGeneral = require('../db/generalData')

const controladores = {

    products:function(req, res) {
        const {id} = req.params
        let product = false
        for (let index = 0; index < dataGeneral.products.length; index++) {
            const element = dataGeneral.products[index];
            if (element.id == id) { product = element

            }
        }
        
        return res.render('product', product)
        
    },

    productAdd:function (req, res) {
        return res.render('product-add', {user:dataGeneral.user})
    }

}

module.exports = controladores

