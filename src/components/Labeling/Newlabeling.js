import React from 'react';

function Newlabeling() {
  return (
    <table className="align-Table">
        <tr className='label-tr'>
          <div className='order-details'>
           <h2 className="orderTEXT">Order Details</h2>
             <form action="abc.php" method="get">
                <label className='input-label'>ORDER ID :</label> <input type="number" name="orderID" /><br />
                <label className='input-label'>WEIGHT :</label> <input type="text" name="weight" placeholder="KG." /><br />
                <label className='input-label'>TOTAL PRICE :</label> <input type="number" name="Total" placeholder="Rs." /><br />
                <label className='input-label'>DATE :</label> <input type="date" name="orderID" />
            </form>
   </div>
   </tr>
   </table>


  )
}

export default Newlabeling;