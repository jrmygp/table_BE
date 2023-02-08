const { DataTypes, INTEGER } = require("sequelize");

const Voucher = (sequelize) => {
  return sequelize.define("Voucher", {
    voucher_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valid_until: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    all_products: {
        type : DataTypes.BOOLEAN,
        defaultValue: false
    }
  });
};

module.exports = Voucher;
