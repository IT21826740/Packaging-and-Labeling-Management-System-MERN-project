
const nodemailer = require('nodemailer');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'it21826740@my.sliit.lk',
    pass: '200050404648',
  },
});

const sendEmail = (winnerName, winnerEmail, attachmentPath, callback) => {
  const mailOptions = {
    from: 'it21826740@my.sliit.lk',
    to: winnerEmail,
    subject: "Congratulations! You're a Winner!",
    html: `
    <p>🎉<h2> Congratulations,</h2> ${winnerName}! You're the lucky winner of our ARTICRAFTS QR Lottery! 🎉</p>
    <h4>Winner Details:</h4>
    <p>Name: ${winnerName}</p>
    <p>Email: ${winnerEmail}</p>
    <img src="cid:giftoffer.jpg" alt="Gift Offer" />
    <br>
    <p>Thank you for participating in our lottery. Please contact us to claim your prize.</p>
    <p>Best regards,</p>
    <p>ARTICRAFTS</p>
    
  `,
  attachments: [
    {
      filename: 'giftoffer.jpg', // Set the filename for the attachment
      path: attachmentPath, // Use the 'attachmentPath' parameter
      cid: 'giftoffer.jpg', // Set a Content-ID to reference in the HTML content
    },
  ],
   
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      callback(error, null); // Pass the error to the callback
    } else {
      console.log('Email sent:', info.response);
      callback(null, info.response); // Pass the email response to the callback
    }
  });
};

module.exports = sendEmail;
