 
import React, { useState } from "react";
import axios from "axios";
import "../../Styles/AddMaterial.css";

export default function AddOrder() {
  const [name, setOrder] = useState("");
  const [date, setDate] = useState("");
  const [state, setState] = useState("");

  function sendData(e) {
    e.preventDefault();

    const pendingOrder = {
      name,
      date,
      state,
    };

    console.log(pendingOrder);

    axios
      .post("http://localhost:5000/order/add", pendingOrder)
      .then(() => {
        alert("Order Success!");
        setOrder("");
        setDate("");
        setState("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container-1" style={{ width: "600px" }}>
      <form onSubmit={sendData}>
        <br />
        <h3>ORDER</h3>
        <br />

        <div className="mb-3">
          <label for="Name" className="form-label">
            Name :
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Enter name"
            onChange={(e) => {
              setOrder(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="Date" className="form-label">
            Date :
          </label>
          <input
            type="text"
            className="form-control"
            id="Date"
            placeholder="Enter Date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label for="State" className="form-label">
            State :
          </label>
          <input
            type="text"
            className="form-control"
            id="State"
            placeholder="State"
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
