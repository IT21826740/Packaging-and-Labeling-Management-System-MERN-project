import React from 'react';
import "../../Styles/Labeling.css"
import PrintLabel from './PrintLabel';

function GenerateLabel() {
  return (
    <div className="new-component">


      <table className="align-Table">
        <br/>
        <h3>LABEL GENERATE PROCESS</h3>
        <br/>
        <div className='label-div' >
        <tr className='label-tr'>
          <th>
            <h4 className="orderTEXT">Order Details</h4>
            <form >
              <label className='input-label'>ORDER ID :</label> <input type="number" name="orderID"  style={{width:"450px"}}/><br />
              <label className='input-label'>WEIGHT :</label> <input type="text" name="weight" placeholder="KG."  style={{width:"450px"}}/><br />
              <label className='input-label'>TOTAL PRICE :</label> <input type="number" name="Total" placeholder="Rs."  style={{width:"450px"}}/><br />
              <label className='input-label'>DATE :</label> <input type="date" name="orderID" />
            </form>
          </th>
        </tr>
        </div>
        <br/>
        <div className='label-div'>   
        <tr className='label-tr'>
          <th>
            <h4 className="customTEXT">Customer Details</h4>
            <form  className="customer">
              <label className='input-label'>CUSTOMER ID :</label> <input type="text" name="cusNO"  style={{width:"450px"}}/><br />
              <label className='input-label'>NAME :</label> <input type="text" name="name" placeholder="Full Name"  style={{width:"450px"}}/><br />
              <label className='input-label'>ADDRESS :</label> <textarea name="address" rows="4" cols="20" style={{width:"450px"}} placeholder="Address" ></textarea><br />
              <label className='input-label'>CONTACT NUMBER :</label> <input type="text" name="contactNO"  style={{width:"450px"}} />
            </form>
          </th>
        </tr>
        </div>
        <br/>

        <div className='label-div' >
        <tr className='label-tr'>
          <th>
            <h4 className="safeTEXT">Safety Warning Generator</h4>
            <form >
             <label></label><br/>
             <label></label><br/>
             <button className='bttn'>+</button>
            </form>
          </th>
          <th>
            <form className="printouts">
            </form>
          </th>
        </tr>
        </div>
        <br/>

        <div className='label-div' >
        <tr className='label-tr'>
          <th>
            <h4 className="customTEXT">Company Details</h4>
            <form  className="company">
              <label className='input-label'>E-mail :</label> <input type="email" name="cusNO" value= "   articrafts@gmail.com" readOnly style={{width:"450px"}} /><br />
              <label className='input-label'>ADDRESS :</label> 
<textarea
  name="companyaddress"
  rows="4"
  cols="20"
  value={`   No: 456/A,
   Hokandara,
   Malabe`}
  readOnly
  style={{ width: "450px" }}
>
  Address
</textarea>
<br />

              <label className='input-label'>CONTACT NUMBER :</label> <input type="text" name="companyNO" value="   011-5382956" readOnly style={{width:"450px"}} />
            </form>
          </th>
          </tr>
       </div>
      </table>
      <br/>
      <br/>

     

      <button className="bttn" style={{marginLeft:"675px"}}>
      <a className ="nav-link" href="/PrintLabel">Create label</a> 
      </button>

     

      <br/>
      <br/>

     
    </div>
  );
}

export default GenerateLabel;
