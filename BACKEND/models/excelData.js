// models/ExcelData.js
const mongoose = require('mongoose');

const excelDataSchema = new mongoose.Schema({
  timestamp: Date,
  email: String,
  fullName: String,
  address: String,
  date: Date,
});

const ExcelData = mongoose.model('ExcelData', excelDataSchema);

module.exports = ExcelData;
