const authController = require("../controller/auth");

const router = require("express").Router();

// Register user
router.post("/register", authController.registerUser);

module.exports = router;
