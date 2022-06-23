const db = require('../database/models')
const user = db.User

/* Requiriendo mi modulo instalado que nos permite trabajar con datos encriptados */
const bcrypt = require('bcryptjs');


const userController = {

    profile: function (req, res, next) {
        user.findByPk(req.params.id,{
            include: [
                {
                    association: 'products',
                    include:{
                        association:'comment'
                    }
                },
                {
                    association: 'comments'
                }

            ],
        }).then((result) =>{
           // res.send(result)
            return res.render('profile', { usuario: result  });
        })

    },
    profileEdit: function (req, res) {
        db.User.findByPk(req.params.id)
        .then((result) =>{
             //res.send(result)
            
            return res.render('profile-edit', { user: result });
         })
    },
    login: function (req, res) {
        if (req.session.user) {
            res.redirect("/users/profile/"+ req.session.user.id)
        }else{

            return res.render('login');
        }
    },
    procesarLogin: (req, res) => {
        let info = req.body; 
        let filtro = { 
            where : [ 
                {email : info.email} 
            ] 
        }
        let errors = {};

        if (info.email == "") {
            errors.message = "El mail esta vacio";
            res.locals.errors = errors;
            return res.render('login');
        } else if(info.password == ""){
            errors.message = "La constraseña esta vacia";
            res.locals.errors = errors;
            return res.render('login');
        }
        else {
            user.findOne(filtro) 
        
        .then((result) =>{
            if (result != null) { 
                let passCript = bcrypt.compareSync(info.password , result.password) 
                if (passCript) {
                    req.session.user = result.dataValues; 
                    if (req.body.remember != undefined) { 
                        res.cookie('userId', result.dataValues.id, {maxAge : 1000 * 60 * 10}) 
                    }
               
                    return res.redirect("/");
                } else {
                    errors.message = "El mail existe pero la constraseña es incorrecta"
                    res.locals.errors = errors;
                    return res.render('login');
                } 
            } else {
               errors.message = "El mail no existe"
               res.locals.errors = errors;
               return res.render('login');
            }

        }).catch((err) => {

        }); 
        }

        

    },
    register: (req , res) => {
        if (req.session.user) {
            res.redirect("/users/profile/"+ req.session.user.id)
        }else{

            return res.render('register');
        }
    },
    procesarRegister: (req , res) => {     
        let info = req.body;
        let errors = {};

        if (info.username == "") {
            errors.message = "El nombre esta vacio";
            res.locals.errors = errors;
            return res.render('register');
        } else if(info.email == ""){
            errors.message = "El email esta vacio";
            res.locals.errors = errors;
            return res.render('register');
        } else if(info.password.length < 3){
            errors.message = "La contraseña debe tener más de 3 caracteres";
            res.locals.errors = errors;
            return res.render('register');
        }
        else {
            let usuario = { 
                username : info.username, 
                email : info.email,
                password : bcrypt.hashSync(info.password, 10),
                birthday: info.birthday,
                img : "",
                created_at : new Date(), 
                update_at : new Date(), 
            }
            if (!req.file) {
                usuario.img = "default-image.png"
            }else{
                usuario.img = req.file.filename
            }
            /* Almacenando el registro del usuario */
            user.create(usuario)
            .then((result) =>{
                return res.redirect("/users/login") 
            }).catch((err) => {
    
            }); 
        }
       
        
    },
    editar: (req , res) => {     
        let info = req.body; 
       
            let usuario = { // No ponemos el id porque es autoincremental
                // Saco los valores de info para llenar el objeto literal (email, etc.)
                username : info.username, // Tengo que ir a register.ejs para fijarme que name tiene en el input
                email : info.email,
                password : bcrypt.hashSync(info.password, 10),
                birthday: info.birthday,
                img : "",
                updated_at : new Date(), // new Date() es darle la fecha del dia de hoy
            }
            
            if (!req.file && info.imgVieja) {
                usuario.img= info.imgVieja
            }else if(!req.file){
                usuario.img= "default-image.png"
            }else{

                usuario.img= req.file.filename
            }
            /* Almacenando el registro del usuario */
            user.update(usuario,{
                where:{
                    id:info.userId
                }
            } )
            .then((result) =>{
                return res.redirect("/users/profile/"+info.userId) // Lo quiero redirigir para que se logee
            }).catch((err) => {
    
            }); // Creando el usuario en la base de datos
        
       
        
    },
    logout: (req , res) => {
        req.session.destroy(); 
        res.clearCookie('userId') 
        return res.render("login")
    }
}

module.exports = userController