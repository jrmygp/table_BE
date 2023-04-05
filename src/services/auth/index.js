const { Op } = require("sequelize");
const { User } = require("../../lib/sequelize");
const Service = require("../service");
// const { nanoid } = require("nanoid");
// const moment = require("moment");
const fs = require("fs");
const bcrypt = require("bcryptjs");

class AuthService extends Service {
  static registerUser = async (username, email, name, password) => {
    try {
      const isUserTaken = await User.findOne({
        where: {
          [Op.or]: [{ username }, { email }],
        },
      });

      if (isUserTaken) {
        return this.handleError({
          statusCode: 400,
          message: "Username or email has been taken",
        });
      }

      const hashedPassword = bcrypt.hashSync(password, 5);

      const registerUser = await User.create({
        username,
        email,
        name,
        password: hashedPassword,
      });

      return this.handleSuccess({
        statusCode: 200,
        message: "Account created",
        data: registerUser,
      });
      // const verifyAccountToken = nanoid(25)
    } catch (error) {
      console.log(error);
      return this.handleError({
        statusCode: 500,
        message: "Server error!",
      });
    }
  };
}

module.exports = AuthService;
