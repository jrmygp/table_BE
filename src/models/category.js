const { DataTypes } = require("sequelize");

const Category = (sequelize) => {
    return sequelize.define("Category", {
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
}

module.exports = Category