const { DataTypes, INTEGER } = require("sequelize");

const Table = (sequelize) => {
  return sequelize.define("Table", {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_valid: {
      type: DataTypes.BOOLEAN,
    },
    valid_until: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
};

module.exports = Table;
