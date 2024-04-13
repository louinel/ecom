const mongoose = require("mongoose");

const db = async () => {
  await mongoose
    .connect(process.env.DB_LOCAL_URI)
    .then(console.log("Connected to database"));
};

module.exports = db;
