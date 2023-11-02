const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const FileModel = require("../models/FileModel");

// Configure multer for file uploads (same as in the previous answer)
const storage = multer.diskStorage({
  // ...
});

const upload = multer({ storage });

// Handle file upload
router.post("/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    // Save file details to MongoDB
    const newFile = new FileModel({
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
    const files = await FileModel.find(); 
    res.json(files);
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ error: "Failed to fetch files" });
  }
});


module.exports = router;
