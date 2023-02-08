const { DataTypes } = require("sequelize");

const Review = (sequelize) => {
  return sequelize.define("Review", {
    review_msg: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_recommended: {
        type: DataTypes.BOOLEAN
    }
  });
};

module.exports = Review;
