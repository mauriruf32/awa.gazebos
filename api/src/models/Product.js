const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false, // Not nullable (required)
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      color: {
        type: DataTypes.ENUM('Rojo','Azul','Naranja','Amarillo','Verde','Otro'), 
        allowNull: false
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      marca: {
        type:DataTypes.STRING,
        allowNull: false,
      },
      material: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      materialTela: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      impermeable: {
        type: DataTypes.ENUM('Si','No'), 
        allowNull: false,
      },
      ajustable: {
        type: DataTypes.ENUM('Si','No'), 
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      peso: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      averageScore: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
      },
      countReviews: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
      },
    },
    { timestamps: false }
  );
};
