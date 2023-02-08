const { DataTypes } = require("sequelize");

const Order = (sequelize) => {
  return sequelize.define("Order", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price : {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  });
};

module.exports = Order;
