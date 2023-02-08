const { DataTypes } = require("sequelize");

const Cart = (sequelize) => {
  return sequelize.define("Cart", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    additional_msg: {
        type: DataTypes.STRING,
    }
  });
};

module.exports = Cart;
