const { DataTypes } = require("sequelize");
const ShoppingCart = require("./ShoppingCart");
const Product = require("./Product");

module.exports = (sequelize) => {
  sequelize.define(
    "Cart_Product",
    {
      ShoppingCartId: {
        type: DataTypes.INTEGER,
        references: {
          model: ShoppingCart,
          key: "id",
        },
      },
      ProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: "id",
        },
      },
      cantidad: {
        type: DataTypes.INTEGER,
      },
      subtotal: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    { timestamps: false }
  );
};
