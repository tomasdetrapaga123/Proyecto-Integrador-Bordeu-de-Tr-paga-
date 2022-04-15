const data = {
    user:  {
        name: 'Tomás',
        email: 'tdetrapaga@udesa.edu.ar',
        password: '12345',
        cantidadDeSeguidores: 1,
        cantidadDeComentarios: 1,
        cantidadDeProductos: 1,
    },

    comments: [ {
        id: 1,
        userName: 'Tomas De Trapaga',
        userEmail: 'tdetrapaga@udesa.edu.ar',
        textoDelComentario: 'Muy linda la camiseta',
        imagenDelPerfil: '',
        productId: 1,
    },

    {
        id: 2,
        userName: 'Marcos Bordeu',
        userEmail: 'mbordeu@udesa.edu.ar',
        textoDelComentario: 'No me gusto mucho la camiseta',
        imagenDelPerfil: '',
        productId: 1,
    },

    {
        id: 3,
        userName: 'Miguel Guerreo',
        userEmail: 'mguerrero@udesa.edu.ar',
        textoDelComentario: 'Estaba buscando una camiseta nueva y se nota que ya está usada',
        imagenDelPerfil: '',
        productId: 1,
    },

    {
        id: 4,
        userName: 'Felipe Floria',
        userEmail: 'floriaf@northland.edu.ar',
        textoDelComentario: 'Cual es el precio? Muy linda!',
        imagenDelPerfil: '',
        productId: 2,
    },

    {
        id: 5,
        userName: 'Rafael Larreta',

        userEmail: 'rafalarreta@northlands.edu.ar',
        textoDelComentario: '¿Tienen la camiseta titular actual del equipo?',
        imagenDelPerfil: '',
        productId: 2,
    },

    {
        id: 6,
        userName: 'Franco Ferrero',
        userEmail: 'ferrerof@udesa.edu.ar',
        textoDelComentario: 'Me gusto meti muchos goles con esta casaca!',
        imagenDelPerfil: '',
        productId: 3,
    },
    {
        id: 7,
        userName: 'Franco Ferrero',
        userEmail: 'ferrerof@udesa.edu.ar',
        textoDelComentario: 'Me quedo chica la remera!',
        imagenDelPerfil: '',
        productId: 3,
    },
    {
        id: 8,
        userName: 'Franco Ferrero',
        userEmail: 'ferrerof@udesa.edu.ar',
        textoDelComentario: 'Me encanto este producto!',
        imagenDelPerfil: '',
        productId: 4,
    },
    {
        id: 9,
        userName: 'Franco Ferrero',
        userEmail: 'ferrerof@udesa.edu.ar',
        textoDelComentario: 'Me encanto!',
        imagenDelPerfil: '',
        productId: 4,
    },
    ],

    products: [ {
        id: 1,
        name: 'Camiseta Inter',
        description: 'Camiseta del Inter de Milan alternativa',
        imageName: 'imageMilan.jpg',
        commentsCount: 3,
    },

    {
        id: 2,
        name: 'Camiseta Independiente',
        description: 'Camiseta de Independiente retro',
        imageName: 'imageIndependiente.jpg',
        commentsCount: 2,
    },

    {
        id: 3,
        name: 'Camiseta Holanda',
        description: 'Camiseta de Holanda retro',
        imageName: 'imageHolanda.jpg',
        commentsCount: 2,
    },

    {
        id: 4,
        name: 'Camiseta Barcelona',
        description: 'Camiseta del Barcelona alternativa',
        imageName: 'imageBarcelona.jpg',
        commentsCount: 1,
    },

    {
        id: 5,
        name: 'Camiseta Manchester City',
        description: 'Camiseta del Manchester City titular',
        imageName: 'imageManCity.jpg',
        commentsCount: 1,
    },

    {
        id: 6,
        name: 'Camiseta Real Madrid',
        description: 'Camiseta del Real Madrid',
        imageName: 'imageRealMadrid.jpg',
        commentsCount: 0,
    },

    {
        id: 7,
        name: 'Camiseta Liverpool',
        description: 'Camiseta del Liverpool alternativa',
        imageName: 'imageLiverpool.jpg',
        commentsCount: 1,
    },

    {
        id: 8,
        name: 'Camiseta Argentina',
        description: 'Camiseta de Argentina retro',
        imageName: 'imageArgentina.jpg',
        commentsCount: 0,
    },

    {
        id: 9,
        name: 'Camiseta Atlético de Madrid',
        description: 'Camiseta del Atlético de Madrid',
        imageName: 'imageAtleticoMadrid.jpg',
        commentsCount: 0,
    },

    {
        id: 10,
        name: 'Camiseta Paris-Saint Germain',
        description: 'Camiseta del Paris-Saint Germain',
        imageName: 'imagePSG.jpg',
        commentsCount: 0,
    },


    ]

}

module.exports = data


