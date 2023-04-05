const AuthService = require("../services/auth");

const authController = {
  registerUser: async (req, res) => {
    try {
      const { name, username, email, password } = req.body;

      const serviceResult = await AuthService.registerUser(
        name,
        username,
        email,
        password
      );

      if (!serviceResult.success) throw serviceResult;
      return res.status(serviceResult.statusCode || 200).json({
        message: serviceResult.message,
        result: serviceResult.data,
      });
    } catch (error) {
      console.log(error);
      return res.status(error.statusCode || 500).json({
        message: error.message,
      });
    }
  },
};

module.exports = authController;
