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
        const comments  = [];

        for (let i = 0; i < dataGeneral.comments.length; i ++){
            if(dataGeneral.comments[i].productId = product.id){
                comments.push(dataGeneral.comments[i]);
            }
        }

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

