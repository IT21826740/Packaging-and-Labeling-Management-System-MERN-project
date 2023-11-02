const express = require('express');
const router = express.Router();
const multer = require('multer');
const ExcelModel = require('../models/excelData');

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Define a route to save Excel data
router.post('/save-excel-data', upload.single('excelFile'), async (req, res) => {
  try {
    const excelData = req.body;

    // Save Excel data to the database
    await ExcelModel.create(excelData);

    res.status(201).json({ message: 'Excel data saved successfully' });
  } catch (error) {
    console.error('Error saving Excel data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;


