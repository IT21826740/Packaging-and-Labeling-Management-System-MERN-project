import React, { useState } from 'react';
import { ExcelRenderer } from 'react-excel-renderer';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';




function InventoryFile() {
  const [header, setHeader] = useState([]);
  const [cols, setCols] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [calculatedData, setCalculatedData] = useState([]);
  const [printDate, setPrintDate] = useState('');
  

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

  const calculateAvailableQuantities = () => {
    const calculatedData = cols.slice(1).map((col) => {
      const materialName = col[0];
      const availableQuantity = col[1];
      const useQuantity = col[2];
      const calculatedQuantity = availableQuantity - useQuantity;
      return {
        materialName,
        availableQuantity,
        useQuantity,
        calculatedQuantity,
      };
    });
    setCalculatedData(calculatedData);
  };

 

  const downloadTableAsPDF = () => {
    const pdf = new jsPDF();
    const options = {
      margin: 10,
      filename: 'weekly_material_report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    const element = document.getElementById('table-to-download');
  
    pdf.autoTable(options);
    pdf.autoTable({ html: element });
  
    // Get the current date and time
    const currentDate = new Date().toLocaleString();
    const text = `Printing Date and Time: ${currentDate}`;
  
    // Add the date and time to the PDF
    pdf.text(text, 10, pdf.internal.pageSize.height - 10);
  
    try {
      pdf.save('weekly_material_report.pdf');
      window.alert('PDF download successful!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.alert('PDF download failed. Please try again.');
    }
  };
  
  
  
  return (
    <div>
      <br/>
       <h2 style={{textAlign:"center"}}>MATERIAL INVENTORY MANAGEMENT</h2>
      <p>
        This is an inventory management tool. You can upload an Excel file containing material data, and it will calculate available quantities. You can also see a table displaying the calculated quantities and another table showing the updated available content.
      </p>
      <br/>
      <p><b>Select excel material inventory file</b></p>
      <input type="file" onChange={handleFile}></input>
      <br />
      <br/>
      <h3 style={{textAlign:"left"}}>Updated Available Content</h3>
      <p>
        The table below displays the updated available content. Material names, available content (with the calculated quantity added), and use content are shown. If the calculated quantity is less than 10, the row is highlighted in red.
      </p>
      
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
            <th style={{ border: '1px solid black' }}>Calculated Quantity</th>
          </tr>
        </thead>
        <tbody>
          {calculatedData.map((data, i) => (
            <tr
              key={i}
              style={{ backgroundColor: data.calculatedQuantity < 10 ? 'rgb(250, 181, 181)' : 'white' }}
            >
              {cols[i + 1].map((c, j) => (
                <td style={{ border: '1px solid black' }} key={j}>
                  {c}
                </td>
              ))}
              <td style={{ border: '1px solid black' }}>
                {data.calculatedQuantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='bttn' onClick={calculateAvailableQuantities}>Calculate Available Quantities</button>
      <br/>
      <br/>
      <br/>

      
      <h3 style={{textAlign:"left"}} >Weekly Print Available Material List </h3>
      <p>
        The table below displays the calculated quantities for the week. Material names, available content, use content, and calculated quantities are shown. You can use the "Print Table" button to generate a printed report with the current date and time.
      </p>
      <table
        id="table-to-download"
        style={{ borderCollapse: 'collapse', margin: '10px auto', border: '1px solid black' }}
        className="flex"
      >
        <thead>
          <tr className={'table-data'}>
            <th style={{ border: '1px solid black' }}>Material Name</th>
            <th style={{ border: '1px solid black' }}>Available Content</th>
            <th style={{ border: '1px solid black' }}>Use Content</th>
          </tr>
        </thead>
        <tbody>
          {calculatedData.map((data, i) => (
            <tr key={i}>
              <td style={{ border: '1px solid black' }}>{data.materialName}</td>
              <td style={{ border: '1px solid black' }}>
                { data.calculatedQuantity}
              </td>
              <td style={{ border: '1px solid black' }}></td>
            </tr>
          ))}
          
        </tbody>
      </table>
      
      <button className='bttn' onClick={downloadTableAsPDF}>Download Table as PDF</button>
      
    </div>
  );
}

export default InventoryFile;



