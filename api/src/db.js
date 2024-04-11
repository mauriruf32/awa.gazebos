const { Sequelize } = require("sequelize");
require("dotenv").config();

const UsersModel = require("./models/Users");
const ProductsModel = require("./models/Product");
const PostsModel = require("./models/Posts");
const ImagesModel = require("./models/Images");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DATABASE_URL} = process.env;


const sequelize = new Sequelize(
    `postgresql://postgres:WyFafHKWksPgnawOcgTdaEHachOHUsxv@viaduct.proxy.rlwy.net:17990/railway`,
    {logging: false}
);

UsersModel(sequelize);
PostsModel(sequelize);
ProductsModel(sequelize);
ImagesModel(sequelize);

const {
    Product,
    User,
    // Favorite,
    // ShoppingCart,
    // Order,
    Post,
    Images,
    // Order_Product,
  } = sequelize.models;
  
  Post.belongsTo(User);
  User.hasMany(Post);
  Images.belongsTo(Product);
  Post.belongsTo(Product);
  Product.hasMany(Post);
  Product.hasMany(Images);

  
//   User.hasMany(Favorite);
//   Favorite.belongsTo(User);
  
//   Product.hasMany(Favorite);
//   Favorite.belongsTo(Product);
  
//   User.hasOne(ShoppingCart);
//   ShoppingCart.belongsTo(User);
  
//   User.hasMany(Order);
//   Order.belongsTo(User);
  
  // ShoppingCart.belongsToMany(Product, { through: "Cart_Product" });
  // Product.belongsToMany(ShoppingCart, { through: "Cart_Product" });
//   ShoppingCart.belongsToMany(Product, { through: Cart_Product });
//   Product.belongsToMany(ShoppingCart, { through: Cart_Product });
  
  // Order.belongsToMany(Product, { through: "Order_Product" });
  // Product.belongsToMany(Order, { through: "Order_Product" });
//   Order.belongsToMany(Product, { through: Order_Product });
//   Product.belongsToMany(Order, { through: Order_Product });
  
  module.exports = {
    ...sequelize.models,
    conn: sequelize,
  };