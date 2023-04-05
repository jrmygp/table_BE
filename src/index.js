const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const moment = require("moment");
const app = express();

dotenv.config();

const PORT = process.env.PORT;

// Sequelize
const { sequelize } = require("./lib/sequelize");
sequelize.sync({ alter: true });

app.use(cors());
app.use(express.json());

// This section is for logging
//
//
//
//

// This section is for routes
const { authRoutes } = require("./routes");

app.use("/auth", authRoutes);

app.use("/", (req, res, next) => {
  res.send("<h1>Welcome to project TABLE<h1/>");
});

app.listen(PORT, () => {
  console.log("Listening in port", PORT);
});
