const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/db");
require("dotenv").config();

const app = express();

// config
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// database connection
db();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});