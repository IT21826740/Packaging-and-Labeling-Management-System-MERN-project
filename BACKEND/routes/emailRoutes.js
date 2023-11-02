/*// backend/routes/emailRoutes.js
const express = require('express');
const sendEmail = require('../models/emailSender'); // Import the email sending function
const router = express.Router();

// Define a route to send emails to the winner
router.post('/send-winner-email', (req, res) => {
  const { winnerName, winnerEmail } = req.body;

  if (!winnerName || !winnerEmail) {
    return res.status(400).json({ message: 'Winner name and email are required.' });
  }

  // Send the email to the winner
  sendEmail(winnerName, winnerEmail);

  res.json({ message: 'Email sent to the winner.' });
});

module.exports = router;*/


const express = require('express');
const sendEmail = require('../models/emailSender'); // Import the email sending function
const path = require('path'); // Import the 'path' module

const router = express.Router();

// Define a route to send emails to the winner
router.post('/send-winner-email', (req, res) => {
  const { winnerName, winnerEmail } = req.body;
  const attachmentPath = path.join(__dirname, '../images/giftoffer.jpg');

  if (!winnerName || !winnerEmail) {
    return res.status(400).json({ message: 'Winner name and email are required.' });
  }

  // Send the email to the winner and handle the response
  sendEmail(winnerName, winnerEmail, attachmentPath, (error, response) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email.' });
    } else {
      return res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
});

module.exports = router;
