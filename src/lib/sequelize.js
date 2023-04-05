const { Sequelize } = require("sequelize");
const mysqlConfig = require("../config/database");

const sequelize = new Sequelize({
  username: mysqlConfig.MYSQL_USERNAME,
  password: mysqlConfig.MYSQL_PASSWORD,
  database: mysqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
  logging: false,
});

// MODELS
const Cart = require("../models/cart")(sequelize);
const Category = require("../models/category")(sequelize);
const Order = require("../models/order")(sequelize);
const PaymentMethod = require("../models/payment_methods")(sequelize);
const Product = require("../models/product")(sequelize);
const Review = require("../models/review")(sequelize);
const Status = require("../models/status")(sequelize);
const Table = require("../models/table")(sequelize);
const Voucher = require("../models/table")(sequelize);
const User = require("../models/user")(sequelize);

// RELATION
Cart.belongsTo(Table, { foreignKey: "table_id" });
Table.hasMany(Cart, { foreignKey: "table_id" });

Category.hasMany(Product);
Product.belongsTo(Category);

Cart.belongsTo(Product, { foreignKey: "product_id" });
Product.hasMany(Cart, { foreignKey: "product_id" });

Review.belongsTo(Product);
Product.hasMany(Review);

Voucher.belongsTo(Product);
Product.hasMany(Voucher);

Order.belongsTo(Product);
Product.hasMany(Order);

Order.belongsTo(Order);
Status.hasMany(Order);

Order.belongsTo(Product);
Product.hasMany(Order);

Order.belongsTo(Table);
Table.hasMany(Order);

module.exports = {
  User,
  Cart,
  Category,
  Order,
  PaymentMethod,
  Product,
  Review,
  Status,
  Table,
  Voucher,
  sequelize,
};
