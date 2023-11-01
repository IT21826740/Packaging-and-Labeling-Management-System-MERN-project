const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  filePath: String,
});

module.exports = mongoose.model("Winners-File", fileSchema);
