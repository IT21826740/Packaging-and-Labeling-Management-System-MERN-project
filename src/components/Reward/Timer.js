 

import React, { useEffect, useState } from 'react';
import "../../Styles/Timer.css"
import { FaQrcode } from 'react-icons/fa';
import axios from 'axios';
import File from "./File";
import FileUpload from './FileUpload';
import Links from './links';

function Timer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [randomWinner, setRandomWinner] = useState({ name: '', email: '' });
  const [resetDate, setResetDate] = useState(null);
 

  // Function to calculate time left
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const storedResetDate = localStorage.getItem('resetDate');
    const parsedResetDate = storedResetDate ? parseInt(storedResetDate, 10) : null;

    if (parsedResetDate && parsedResetDate > now) {
      const timeLeft = parsedResetDate - now;
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    setResetDate(parseInt(localStorage.getItem('resetDate'), 10));

    const interval = setInterval(() => {
      const calculatedTimeLeft = calculateTimeLeft();
      setTime(calculatedTimeLeft);

      if (calculatedTimeLeft.days === 0 && calculatedTimeLeft.hours === 0 && calculatedTimeLeft.minutes === 0 && calculatedTimeLeft.seconds === 0) {
        clearInterval(interval);
        getRandomWinnerFromFile();
        alert('Time is up!');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getRandomWinnerFromFile = () => {
    File.getRandomWinner()
      .then((winnerData) => {
        setRandomWinner(winnerData);
      })
      .catch((error) => {
        console.error('Error fetching random winner data:', error);
        alert('Error fetching random winner data. Please try again later.');
      });
  };

  const resetTimer = () => {
    // Display a confirmation dialog
    const confirmReset = window.confirm('Are you sure you want to reset the timer?');

    if (confirmReset) {
      const newResetDate = new Date();
      newResetDate.setMonth(newResetDate.getMonth() + 1);
      setResetDate(newResetDate);
      localStorage.setItem('resetDate', newResetDate.getTime().toString());
      setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const sendEmailToWinner = () => {
    if (!randomWinner.name || !randomWinner.email) {
      alert('Please select a random winner first.');
      return;
    }

    axios.post('http://localhost:5000/api/email/send-winner-email', {
      winnerName: randomWinner.name,
      winnerEmail: randomWinner.email,
    })
      .then((response) => {
        console.log('Email sent:', response.data.message);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert(error + '  Failed to send email');
      });
  };



  return (
    <div className='container'>
      <div className='timer-frame'>
        <h4><FaQrcode size={28} style={{ marginRight: '20px' }} />The ARTICRAFTS QR Lottery</h4>
        <br />
        <h6>Reminder</h6>
        <div className="timer">
          <div className="time-block">
            <div className="time">{time.days}</div>
            <div className="time-label">Days</div>
          </div>
          <div className="time-block">
            <div className="time">{time.hours}</div>
            <div className="time-label">Hours</div>
          </div>
          <div className="time-block">
            <div className="time">{time.minutes}</div>
            <div className="time-label">Minutes</div>
          </div>
          <div className="time-block">
            <div className="time">{time.seconds}</div>
            <div className="time-label">Seconds</div>
          </div>
        </div>
        <h6 className='offer-refresh'>OFFER REFRESH : <button className='bttn' onClick={resetTimer}>Reset Date</button> </h6>
      </div>
      <br />
      <br />
      <div className='winner' style={{ border: '1px solid black', padding: '10px' }}>
        <button className='bttn' style={{ backgroundColor: "#f4b92f" }} onClick={getRandomWinnerFromFile}>GET RANDOM WINNER</button><br />
        <h3>CONGRATULATIONS!</h3>
        <label className='input-label' style={{ marginRight: '10px' }}>WINNER NAME:</label> <input type="text" name="name" placeholder='Name' style={{ width: "63%" }} value={randomWinner.name} readOnly /><br />
        <label className='input-label' style={{ marginRight: '10px' }}>WINNER EMAIL:</label> <input type="email" name="email" placeholder="Email" style={{ width: "63%" }} value={randomWinner.email} readOnly /><br />
        <br />
        <button className='bttn' style={{ backgroundColor: "#f4b92f", marginLeft: "73%" }} onClick={sendEmailToWinner}>SEND MAIL TO WINNER</button><br />
      </div>
      <br />
      <br />
      <Links />
      <h1>Winners</h1>
      <br />
      <br />
      <File />
      <br />
      <br />
      <p>At the end of the month, store competitor data in the database </p>
      <FileUpload />
      
      
    </div>
  );
}

export default Timer;
