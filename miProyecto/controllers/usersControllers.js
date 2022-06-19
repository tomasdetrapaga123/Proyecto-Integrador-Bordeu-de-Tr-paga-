const db = require('../database/models')
const user = db.User

/* Requiriendo mi modulo instalado que nos permite trabajar con datos encriptados */
const bcrypt = require('bcryptjs');


const userController = {

    profile: function (req, res, next) {
        const novedades = dataGeneral.products;
        return res.render('profile', { user: dataGeneral.user, novedades });

    },

    profileEdit: function (req, res) {
        return res.render('profile-edit', { user: dataGeneral.user });
    },
    login: function (req, res) {
        return res.render('login');
    },
    procesarLogin: (req, res) => {
        let info = req.body; 
        let filtro = { // Hacemos un filtro
            where : [ // Este where hace un array de condiciones. Que condiciones quiero que se cumplan
                { email : info.email} // La primera es un objeto literal // Quiero que coincida el mail con el del usuario y lo tengo en info.email (email es el name del input)
            ] // Si encuentras un registro que coincida con este coreo, traeme todo el registro
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
            user.findOne(filtro) // Le paso al findOne el dato de filtro para que vaya a buscar el usuario correcto
        
        .then((result) =>{

            if (result != null) { // Lo primero que digo es que si este usuario existe
                let passCript = bcrypt.compareSync(info.password , result.password) // Quiero comparar mi clave que tengo en el formulario con el hash en la base de datos. 
                                                                                    // El compareSync va a hacer de manera asincronica esta comparación, hashea el primer dato y me va a devolver un booleano verdadera si es igual y un falso si no lo es 
                if (passCript) {
                    // Poniendo en session al usuario 
                    req.session.user = result.dataValues; // Que en session guarde una propiedad llamada user. Nosotros capturamos en result el dataValues que tiene toda la información y la guardamos en sesión 
                    
                    if (req.body.remember != undefined) { // Si existe el recordarme que tengo en el body
                        res.cookie('userId', result.dataValues.id, {maxAge : 1000 * 60 * 10}) // 1) el nombre de la propiedad que quier guardar, 2) lo que quiero guardar. En este caso seria el id del usuario, 3) una propiedad que dice cuanto tiempo
                    }

                    return res.redirect("/");
                } else {
                    errors.message = "El mail existe pero la constraseña es incorrecta"
                    res.locals.errors = errors;
                    return res.render('login');
                } // Si la comparacion de arriba es falsa que me ponga que la contraseña es incorrecta
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
        return res.render('register');
    },
    procesarRegister: (req , res) => {     
        let info = req.body; // Quiero que me leas toda la información que viene en el cuerpo del formulario y me la guardes en a variable info
        // A traves del req.boody voy a capturar todos los inputs y todos los valores que tiene ese input   
        /* Crear un objeto litral vacio */
        let errors = {};

        if (info.username == "") {
            errors.message = "El nombre esta vacio";
            res.locals.errors = errors;
            return res.render('register');
        } else if(info.email == ""){
            errors.message = "El email esta vacio";
            res.locals.errors = errors;
            return res.render('register');
        } else if(info.password.length <= 6){
            errors.message = "La contraseña debe tener 6 caracteres o más";
            res.locals.errors = errors;
            return res.render('register');
        }
        else {
            let usuario = { // No ponemos el id porque es autoincremental
                // Saco los valores de info para llenar el objeto literal (email, etc.)
                username : info.username, // Tengo que ir a register.ejs para fijarme que name tiene en el input
                email : info.email,
                password : bcrypt.hashSync(info.password, 10),
                birthday: info.birthday,
                img : info.img,
                created_at : new Date(), // Esto no esta en info. Por eso voy a mySQL y me fijo que tipo de dato son
                update_at : new Date(), // new Date() es darle la fecha del dia de hoy
            }
            /* Almacenando el registro del usuario */
            user.create(usuario)
            .then((result) =>{
                return res.redirect("/users/login") // Lo quiero redirigir para que se logee
            }).catch((err) => {
    
            }); // Creando el usuario en la base de datos
        }
       
        
    },
    logout: (req , res) => {
        req.session.destroy(); // Destruimos la session
        res.clearCookie('userId') // Borramos las cookies userId
        return res.render("login")
    }
}

module.exports = userController