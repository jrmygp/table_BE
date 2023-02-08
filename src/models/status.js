const { DataTypes } = require("sequelize");

const Status = (sequelize) => {
  return sequelize.define("Status", {
    status_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = Status;
