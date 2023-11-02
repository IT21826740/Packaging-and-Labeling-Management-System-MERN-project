// models/ExcelData.js
const mongoose = require('mongoose');

const excelDataSchema = new mongoose.Schema({
  materialName : String,
  availableQuantity:Number,
  useQuantity:Number,
});

const InExcelData = mongoose.model('Inventory-ExcelData', excelDataSchema);

module.exports = InExcelData;
