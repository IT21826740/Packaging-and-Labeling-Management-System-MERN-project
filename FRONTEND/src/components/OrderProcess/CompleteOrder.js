import React, { useState } from 'react';

function CompleteOrder() {
  const [orderState, setOrderState] = useState('customized'); // Default state is 'customized'
  const [cmorders, setcmOrders] = useState([]);

  const handleStateChange = (event) => {
    setOrderState(event.target.value);
  };

 
  
  return (
    <div className="container">
      <h3>Order Fulfillment Process</h3>
      <br />
      <h5>Order details</h5>

       <div className='orderDetails' style={{ border: '1px solid black', padding: '10px' }}>

              <label className='input-label'style={{ marginRight: '10px' }}>ORDER ID :</label> <input type="text" name="orderID" style={{width:"63%"}}/><br />
              <label className='input-label'style={{ marginRight: '10px' }}>WEIGHT :</label> <input type="text" name="weight" placeholder="KG." style={{width:"63%"}}/><br />
              <label className='input-label' style={{ marginRight: '10px' }}>TOTAL PRICE :</label> <input type="number" name="Total" placeholder="Rs." style={{width:"63%"}}/><br />
              <label className='input-label' style={{ marginRight: '10px' }}>DATE :</label> <input type="date" name="orderID" />

      <br/>
      <label className='input-label'style={{ marginRight: '10px' }}>STATES :</label>
  <div style={{ display: 'inline-block' }}>
  <input
    type="radio"
    name="radio"
    value="customized"
    checked={orderState === 'customized'}
    onChange={handleStateChange}
    style={{ display: 'inline-block', marginRight: '10px' }}
  />
  <label style={{ display: 'inline-block', marginRight: '20px' }}>Customized Order</label>

  <input
    type="radio"
    name="radio"
    value="non-customized"
    checked={orderState === 'non-customized'}
    onChange={handleStateChange}
    style={{ display: 'inline-block', marginRight: '10px' }}
  />
  <label style={{ display: 'inline-block' }}>Non-Customized Order</label>
   </div>
<br/>
<br/>
   <table className="flex">
        <thead>
          <tr className={"table-data"}>
            <th>PRODUCT ID</th>
            <th>PRODUCT NAME</th>
            <th>QUANTITY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
        </table>

        </div>

        <br/>
        <br/>

        <div className='' style={{ border: '1px solid black', padding: '10px' }}>
          
        <label>PACKAGING TYPE :</label>
<div style={{ display: 'inline-block' }}>
  <input
    type="radio"
    name="radio"
    value="Customized Packaging"
    checked={orderState === 'customized'}
    onChange={handleStateChange}
    style={{ display: 'inline-block', marginRight: '10px' }}
  />
  <label style={{ display: 'inline-block', marginRight: '20px' }}>Customized Packaging</label>

  <input
    type="radio"
    name="radio"
    value="Company Packaging"
    checked={orderState === 'non-customized'}
    onChange={handleStateChange}
    style={{ display: 'inline-block', marginRight: '10px' }}
  />
  <label style={{ display: 'inline-block' }}>Non-Customized Packaging</label>
   </div>
   <br/>
   <br/>
          
          <label className='input-label'style={{ marginRight: '10px' }}>WRAPPING PAPER :</label> <input type="text" name="WRAPPING PAPER" style={{width:"63%"}} /><br />
          <label className='input-label'style={{ marginRight: '10px' }}>RIBBON COLOR :</label> <input type="text" name="RIBBON COLOR" style={{width:"63%"}}/><br />
          <label className='input-label'style={{ marginRight: '10px' }}>CUSTOMER'S OWN WISHES :</label><textarea name="wish" rows="4" cols="24" style={{width:"63%"}}/><br />
        
        </div>
<br/>
<br/>
      <div className='' style={{ border: '1px solid black', padding: '10px' }}>
      <label>STATES :</label>
<div style={{ display: 'inline-block' }}>
  <input
    type="radio"
    name="radio"
    value="Customized Packaging"
    checked={orderState === 'customized'}
    onChange={handleStateChange}
    style={{ display: 'inline-block', marginRight: '10px' }}
  />
  <label style={{ display: 'inline-block', marginRight: '20px' }}>Completed</label>

  <input
    type="radio"
    name="radio"
    value="Company Packaging"
    checked={orderState === 'non-customized'}
    onChange={handleStateChange}
    style={{ display: 'inline-block', marginRight: '10px' }}
  />
  <label style={{ display: 'inline-block' }}>Pending</label>
   </div>

   <h3>Person who checked the quality of the Packaging ?</h3>

          <label className='input-label'style={{ marginRight: '10px' }}>QUALITY CHECKER NAME :</label> <input type="text" name="name" style={{width:"63%"}}/><br />
          <label className='input-label'style={{ marginRight: '10px' }}>QUALITY CHECKER ID :</label> <input type="text" name="id" style={{width:"63%"}}/><br />
          <label className='input-label'style={{ marginRight: '10px' }}>DATE :</label> <input type="text" name="date" style={{width:"63%"}}/><br /><br/>

      </div>
      <br/>
      <br/>

      <button className='bttn'style={{marginLeft:"300px",width:"200px"}}>SAVE</button>
      <button className='bttn'style={{marginLeft:"50px",width:"200px"}}>EDIT</button>
      <button className='bttn'style={{marginLeft:"50px",width:"200px"}}><a className ="nav-link" href="/GenerateLabel"> GENERATE LABEL</a></button>
      <br/>
      <br/>

    </div>
  );
}

export default CompleteOrder;


