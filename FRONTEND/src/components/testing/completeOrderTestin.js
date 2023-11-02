import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CompleteOrder() {
    const [Qcname, setQcName] = useState("");
    const [QcID, setQcID] = useState("");
    const [date, setDate] = useState("");
  const [orderState, setOrderState] = useState('customized');
  const [orderDetails, setOrderDetails] = useState({
    orderID: '',
    weight: '',
    total: '',
    date: '',
    packagingType: '',
    wrappingPaper: '',
    ribbonColor: '',
    wish: '',
  });

  const handleStateChange = (event) => {
    setOrderState(event.target.value);
  };

  useEffect(() => {
    // Make a GET request to fetch order details by order ID (you need to pass the order ID as a parameter)
    const orderId = 'your_order_id_here'; // Replace with the actual order ID
    axios
      .get(`http://localhost:5000/order/get/${orderId}`)
      .then((response) => {
        const orderData = response.data; // Assuming the response contains the order data
        setOrderDetails(orderData);
      })
      .catch((error) => {
        console.error('Error fetching order details:', error);
      });
  }, []);

 

  return (
    <div className="container">
      <h3>Order Fulfillment Process</h3>
      <br />
      <h5>Order details</h5>

      <div className="orderDetails" style={{ border: '1px solid black', padding: '10px' }}>
        <label className="input-label" style={{ marginRight: '10px' }}>
          ORDER ID :
        </label>{' '}
        <input
          type="text"
          name="orderID"
          value={orderDetails.orderID}
          style={{ width: '63%' }}
        />
        <br />
        <label className="input-label" style={{ marginRight: '10px' }}>
          WEIGHT :
        </label>{' '}
        <input
          type="text"
          name="weight"
          value={orderDetails.weight}
          placeholder="KG."
          style={{ width: '63%' }}
        />
        <br />
        <label className="input-label" style={{ marginRight: '10px' }}>
          TOTAL PRICE :
        </label>{' '}
        <input
          type="number"
          name="total"
          value={orderDetails.total}
          placeholder="Rs."
          style={{ width: '63%' }}
        />
        <br />
        <label className="input-label" style={{ marginRight: '10px' }}>
          DATE :
        </label>{' '}
        <input type="date" name="date" value={orderDetails.date} />
        <br />
        <label className="input-label" style={{ marginRight: '10px' }}>
          STATES :
        </label>
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
        <br />
        <br />
          
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
          
          <label className='input-label'style={{ marginRight: '10px' }}>WRAPPING PAPER :</label> <input type="text" name="WRAPPING PAPER" style={{width:"63%"}} value={orderDetails.wrappingPaper}/><br />
          <label className='input-label'style={{ marginRight: '10px' }}>RIBBON COLOR :</label> <input type="text" name="RIBBON COLOR" style={{width:"63%"}} value={orderDetails.ribbonColor}/><br />
          <label className='input-label'style={{ marginRight: '10px' }}>CUSTOMER'S OWN WISHES :</label><textarea name="wish" rows="4" cols="24" style={{width:"63%"}} value={orderDetails.wish} /><br />
        
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
