// src/components/InventoryList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function PrintList() {
  const [inventoryItems, setInventoryItems] = useState([]);

  useEffect(() => {
    axios.get('/api/inventory')
      .then((response) => {
        setInventoryItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inventory items:', error);
      });
  }, []);

  return (
    <div>
     
        
      <h3>INVENTORY LIST</h3>
      <ul>
        {inventoryItems.map((item) => (
          <li key={item._id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <button className="bttn" onClick={() => window.print()}>Print</button>
    </div>
  );
}

export default PrintList;
