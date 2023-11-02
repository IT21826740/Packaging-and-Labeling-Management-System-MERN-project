import React, { useState } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import axios from 'axios';

function File() {
  const [header, setHeader] = useState([]);
  const [cols, setCols] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track submission status
  const [selectedFile, setSelectedFile] = useState(null);
  const [randomWinner, setRandomWinner] = useState(null);

  const handleFile = (event) => {
    const file = event.target.files[0];
    ExcelRenderer(file, (err, Response) => {
      if (err) {
        console.log(err);
      } else {
        setHeader(Response.rows[0]);
        setCols(Response.rows);
      }
    });
  };
 
  const sendDataToServer = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/excel/save-excel-data', data);
      console.log(response.data.message);
      alert('Saved Successfully!');
    } catch (error) {
      console.error('Error sending data:', error);
      alert('Error: ' + error.message);
    } finally {
      setIsSubmitting(false); // Reset submission status
    }
  };

  const handleSaveClick = () => {
    setIsSubmitting(true); // Set submission status to true
    const excelData = cols.slice(1).map((col) => {
      return {
        timestamp: col[0],
        email: col[1],
        fullName: col[2],
        address: col[3],
        date: col[4],
      };
    });
    sendDataToServer(excelData);
  };


// select random winner

  // Function to select a random winner from the Excel data
  const getRandomWinner = () => {
    if (cols.length <= 1) {
      return Promise.reject('No data available to select a winner.');
    }

    const randomRowIndex = Math.floor(Math.random() * (cols.length - 1)) + 1;
    const randomRow = cols[randomRowIndex];
    const winnerName = randomRow[2]; // Assuming the name is in the third column (index 2)
    const winnerEmail = randomRow[1]; // Assuming the email is in the second column (index 1)

    return Promise.resolve({ name: winnerName, email: winnerEmail });
  };

  // Expose getRandomWinner function
  File.getRandomWinner = getRandomWinner;



  return (
    <div>
      <input type="file" onChange={handleFile}></input>
      <br />
      <table
        style={{ borderCollapse: 'collapse', margin: '10px auto', border: '1px solid black' }}
        className="flex"
      >
        <thead>
          <tr className={'table-data'}>
            {header.map((h, i) => (
              <th style={{ border: '1px solid black' }} key={i}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cols.slice(1).map((col, i) => (
            <tr key={i}>
              {col.map((c, j) => (
                <td style={{ border: '1px solid black' }} key={j}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      
      
    </div>
  );
}

export default File;



