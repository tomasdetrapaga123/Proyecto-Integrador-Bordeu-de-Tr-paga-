module.exports = function (sequelize, dataTypes) {

    // Definir un alias.
    let alias = 'Product'; // Con este alias sequelize va a identificar internamente al archivo de modelo.

    // Describir la configuración de las columnas de la tabla
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
        shirt_name: {
            type: dataTypes.STRING,
        },
        shirt_description: {
            type: dataTypes.STRING,
        },
       
        shirt_image: {
            type: dataTypes.STRING,
        },
       
        created_at: {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        }

    }

    let config = {
        tableName: 'products',
        timestamps: true, // Si la tabla no tiene los campos created_at y updated_at
        underscored: true, // Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id',
        })

        Product.hasMany(models.Comment, {
            as: 'comment',
            foreignKey: 'product_id'
        })
    };

    return Product;
}