/*import React, { useState, useEffect } from "react";
import axios from "axios";


function PendingOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedState, setSelectedState] = useState("all");
  

  useEffect(() => {
    const getOrders = () => {
      axios
        .get("http://localhost:5000/order/read")
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    getOrders();
  }, []);

  const handleDelete = (orderId) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this?");

    if (confirmDeletion) {
      axios
        .delete(`http://localhost:5000/order/delete/${orderId}`)
        .then((res) => {
          if (res.status === 200) {
            setOrders(orders.filter((order) => order._id !== orderId));
          }
        })
        .catch((err) => {
          console.log(err.message);
          alert(err);
        });
    }
  };

  const handleFilter = (filterState) => {
    setSelectedState(filterState);
  };

  const filteredOrders = selectedState === "all"
    ? orders
    : orders.filter((order) => order.state === selectedState);


  return (
    <div className="container" style={{ border: "1px solid black", marginTop: "15px" }}>
      <br />
      <h3 style={{ textAlign: 'center' }}>PENDING ORDERS</h3>
      <br />

      

       <p><b> Orders  |</b> SORT BY :</p>
       <button className="bttn" style={{marginLeft:"10px"}} onClick={() => handleFilter("all")}>All</button>
       <button className="bttn" style={{marginLeft:"10px"}} onClick={() => handleFilter("customized")}>Customized Orders</button>
       <button className="bttn" style={{marginLeft:"10px"}} onClick={() => handleFilter("non-customized")}>Non-Customized Orders</button>
       
       <br/>
       <br/>

      <table className="flex">
        <thead>
          <tr className={"table-data"}>
            <th>Name of orderer</th>
            <th>Date</th>
            <th>State</th>
            <th>     </th>
            <th>     </th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order._id} className="m-data">
              <td>{order.name}</td>
              <td>{order.date}</td>
              <td>{order.state}</td>
              <td>
                <button className="bttn"><a className="nav-link" href="/CompleteOrder">Complete Order</a></button>
                </td>
                <td>
                <button className="bttn" onClick={() => handleDelete(order._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PendingOrders;
*/


import React, { useState, useEffect } from "react";
import axios from "axios";

function PendingOrders() {
  const [orders, setOrders] = useState([]);
  const [selectedState, setSelectedState] = useState("all");

  useEffect(() => {
    const getOrders = () => {
      axios
        .get("http://localhost:5000/order/read")
        .then((res) => {
          setOrders(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    getOrders();
  }, []);

  const handleDelete = (orderId) => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this?"
    );

    if (confirmDeletion) {
      axios
        .delete(`http://localhost:5000/order/delete/${orderId}`)
        .then((res) => {
          if (res.status === 200) {
            setOrders(orders.filter((order) => order._id !== orderId));
          }
        })
        .catch((err) => {
          console.log(err.message);
          alert(err);
        });
    }
  };

  const handleFilter = (filterState) => {
    setSelectedState(filterState);
  };

  const filteredOrders =
    selectedState === "all"
      ? orders
      : orders.filter((order) => order.state === selectedState);

  return (
    <div className="container" style={{ border: "1px solid black", marginTop: "15px" }}>
      <br />
      <h3 style={{ textAlign: "center" }}>PENDING ORDERS</h3>
      <br />

      <p>
        <b>Orders |</b> SORT BY :
      </p>
      <button className="bttn" style={{ marginLeft: "10px" }} onClick={() => handleFilter("all")}>
        All
      </button>
      <button className="bttn" style={{ marginLeft: "10px" }} onClick={() => handleFilter("customized")}>
        Customized Orders
      </button>
      <button className="bttn" style={{ marginLeft: "10px" }} onClick={() => handleFilter("non-customized")}>
        Non-Customized Orders
      </button>

      <br />
      <br />

      <table className="flex">
        <thead>
          <tr className={"table-data"}>
            <th>Name of orderer</th>
            <th>Date</th>
            <th>State</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order._id} className="m-data">
              <td>{order.name}</td>
              <td>{new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}</td>
              <td>{order.state}</td>
              <td>
                <button className="bttn">
                  <a className="nav-link" href="/CompleteOrder">
                    Complete Order
                  </a>
                </button>
              </td>
              <td>
                <button className="bttn" onClick={() => handleDelete(order._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PendingOrders;



