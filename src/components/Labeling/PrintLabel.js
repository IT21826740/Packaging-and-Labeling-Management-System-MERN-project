

import React from 'react';

function PrintLabel() {
  const handleDownloadLabel = () => {
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = require('../../Images/articraft label.png'); // Provide the URL of the image
    link.download = 'label.png'; // Specify the file name for the downloaded image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    
    // Display an alert when download is successful
    window.alert('Label downloaded successfully!');
  };


  const handleDownloadQR = () => {
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = require('../../Images/QRLottery.jpeg'); // Provide the URL of the QR image
    link.download = 'qrcode.jpeg'; // Specify the file name for the downloaded QR image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Display an alert when download is successful
    window.alert('QR Code downloaded successfully!');
  };

  return (
    <div className='container'>
        <br/>
        
        <table>
          <tr>
            
            <td>
            <button className="bttn" onClick={handleDownloadLabel}>Download Label</button>
              <br/>
              <h3> Download Label</h3>
              <p>you have access to download customized printing labels for various purposes. Efficiently manage your printing needs by selecting the appropriate label template, inputting relevant data, and clicking "Download Label." Simplify your administrative tasks and streamline your operations with our user-friendly label download system.</p>
           <img src={require('../../Images/articraft label.png')} alt='label' style={{width:"600px",height:"800px", marginLeft:"10px"}} />
           </td>
           <td >
           <button className="bttn" onClick={handleDownloadQR} style={{marginBottom:"50px"}} >Download QR Lottery</button>
           
            <h3>Download Lottery QR Code</h3>
            <p style={{marginTop:"10px"}}>Simply click the "Download" button below, and your personalized lottery QR code will be saved to your device. This QR code is your virtual lottery ticket, so keep it safe!</p>
           <img src={require('../../Images/QRLottery.jpeg')} alt='qr' style={{width:"400px",height:"400px", marginLeft:"150px"}} /> 
           <br/>
           <p>Check for Winners: Stay tuned for the draw date. After the lottery draw, use your QR code to check if you're one of our lucky winners. Fingers crossed!</p>
           <br/>

          <p>Important Note: Please keep your QR code confidential 
              until the draw is complete to avoid any duplicates.</p>
              <p style={{marginBottom:"150px"}}>Thank you for being a part of our lottery event. Good luck, and may the odds be in your favor</p>
           </td>

         </tr>
      </table>
      <br/>
      
    </div>
  );
}

export default PrintLabel;

