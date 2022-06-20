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
    delete: function (req, res) {
        let id = req.params.id
        db.Product.destroy({
            where:[{
                id:id
            }]
        } ).then(producto => {
            return res.redirect("/")
        })
    },
    edit: function (req, res) {
        let id = req.params.id
        db.Product.findByPk(id, {
            include: [
                
                {
                    association: 'user'
                }


            ]
        }).then(producto => {
            // return res.send(producto) 
            return res.render('product-edit', {
                producto: producto
            });
        })



    },

    productAdd: function (req, res) {
        return res.render('product-add', { user: dataGeneral.user })
    },

    productCreate: function (req, res) { 
        let info = req.body
        let camiseta = { // No ponemos el id porque es autoincremental
            // Saco los valores de info para llenar el objeto literal (email, etc.)
            user_id : res.locals.user.id, // Tengo que ir a register.ejs para fijarme que name tiene en el input
            shirt_name : info.shirt_name,
            shirt_description : info.shirt_description,
            shirt_image : req.file.filename,
            created_at : new Date(), // Esto no esta en info. Por eso voy a mySQL y me fijo que tipo de dato son
            updated_at : new Date(), // new Date() es darle la fecha del dia de hoy
        }
        
        /* Almacenando el registro del usuario */
        db.Product.create(camiseta)
        .then((result) =>{
            return res.redirect("/") // Lo quiero redirigir para que se logee
        }).catch((err) => {
            console.error(err)
        }); // Creando el usuario en la base de datos
        
       
    },
    productEdit: function (req, res) { 

        let info = req.body
        let camiseta;

        if (req.file) {
            
            camiseta = { 
               
                shirt_name : info.shirt_name,
                shirt_description : info.shirt_description,
                shirt_image : req.file.filename,
                updated_at : new Date(), // new Date() es darle la fecha del dia de hoy
            }
        } else {
            camiseta = { 
               
                shirt_name : info.shirt_name,
                shirt_description : info.shirt_description,
                updated_at : new Date(), // new Date() es darle la fecha del dia de hoy
            }
            
        }
        
        
        db.Product.update(camiseta,{
            where: {
                id: info.idProduct
            }
        } )
        .then((result) =>{
            return res.redirect("/product/"+ info.idProduct) // Lo quiero redirigir para que se logee
        }).catch((err) => {
            console.error(err)
        }); // Creando el usuario en la base de datos
        
       
    },
    createComment: function (req, res) { 
        let info = req.body
        let comentario = { // No ponemos el id porque es autoincremental
            // Saco los valores de info para llenar el objeto literal (email, etc.)
            product_id : info.idProduct, // Tengo que ir a register.ejs para fijarme que name tiene en el input
            user_id : info.idUser, // Tengo que ir a register.ejs para fijarme que name tiene en el input
           comentario : info.comentario,
            created_at : new Date(), // Esto no esta en info. Por eso voy a mySQL y me fijo que tipo de dato son
            updated_at : new Date(), // new Date() es darle la fecha del dia de hoy
        }



        
        /* Almacenando el registro del usuario */
        db.Comment.create(comentario)
        .then((result) =>{
            return res.redirect("/product/"+info.idProduct) // Lo quiero redirigir para que se logee
        }).catch((err) => {
            console.error(err)
        }); // Creando el usuario en la base de datos
        
       
    }

}

module.exports = controladores


