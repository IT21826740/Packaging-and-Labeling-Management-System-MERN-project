const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const InventoryFileModel = require('../models/InvenoryFileModel')

// Configure multer for file uploads (same as in the previous answer)
const storage = multer.diskStorage({
  /*destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Define the destination for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },*/
});

const upload = multer({ storage });

// Handle file upload
router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    // Save file details to MongoDB
    const newFile = new InventoryFileModel({
      filename: req.file.originalname,
      filePath: req.file.path,
    });

    await newFile.save();
    // File uploaded successfully
    res.json({ message: "File uploaded successfully" });
  } catch (error) {
    // Handle error
    console.error("File upload error:", error);
    res.status(500).json({ error: "File upload failed" });
  }
});

//read files
router.get("/files", async (req, res) => {
  try {
    const files = await InventoryFileModel.find(); 
    res.json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ error: "Failed to fetch files" });
  }
});


module.exports = router;
