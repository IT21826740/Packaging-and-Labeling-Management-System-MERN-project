
  import React, { useState } from "react";
  import axios from "axios";
  
  export default function AddMaterial() {
    const [name, setName] = useState("");
    const [dimention, setDimension] = useState("");
    const [patten, setPattern] = useState("");
    const [usage, setUsage] = useState("");
  
    const [nameValid, setNameValid] = useState(true);
    const [dimensionValid, setDimensionValid] = useState(true);
    const [patternValid, setPatternValid] = useState(true);
    const [usageValid, setUsageValid] = useState(true);
  
    const validateName = (value) => {
      const isValid = /^[A-Za-z\s]+$/.test(value);
      setNameValid(isValid);
      return isValid;
    };
  
    const validateDimension = (value) => {
      // You can add your own validation logic for dimension here
      const isValid = value.trim() !== "";
      setDimensionValid(isValid);
      return isValid;
    };
  
    const validatePattern = (value) => {
      // You can add your own validation logic for pattern here
      const isValid = /^[A-Za-z\s]+$/.test(value);
      setPatternValid(isValid);
      return isValid;
    };
  
    const validateUsage = (value) => {
      // You can add your own validation logic for usage here
      const isValid = value.trim() !== "";
      setUsageValid(isValid);
      return isValid;
    };
  
    const sendData = (e) => {
      e.preventDefault();
  
      const isNameValid = validateName(name);
      const isDimensionValid = validateDimension(dimention);
      const isPatternValid = validatePattern(patten);
      const isUsageValid = validateUsage(usage);
  
      if (isNameValid && isDimensionValid && isPatternValid && isUsageValid) {
        const newMaterial = {
          name,
          dimention,
          patten,
          usage,
        };
  
        axios
          .post("http://localhost:5000/material/add", newMaterial)
          .then(() => {
            alert("Material Added Successfully!");
            setName("");
            setDimension("");
            setPattern("");
            setUsage("");
          })
          .catch((err) => {
            alert(err + "An error occurred while adding the material. Please try again later.");
          });
      } else {
        alert("Please fill in all fields correctly.");
      }
    };
  
    return (
      <div className="container-1" style={{ width: "600px"}}>
        <form onSubmit={sendData}>
          <br />
          <h3>ADD NEW MATERIAL</h3>
          <br />
  
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Material :
            </label>
            <input
              type="text"
              className={`form-control ${nameValid ? "" : "is-invalid"}`}
              id="Name"
              placeholder="Enter Material Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
            />
            {!nameValid && (
              <div className="invalid-feedback">Please enter a valid name.</div>
            )}
          </div>
  
          <div className="mb-3">
            <label htmlFor="Size" className="form-label">
              Measurements :
            </label>
            <input
              type="text"
              className={`form-control ${dimensionValid ? "" : "is-invalid"}`}
              id="Size"
              placeholder="Enter Measurements"
              value={dimention}
              onChange={(e) => {
                setDimension(e.target.value);
                validateDimension(e.target.value);
              }}
            />
            {!dimensionValid && (
              <div className="invalid-feedback">Please enter valid measurements.</div>
            )}
          </div>
  
          <div className="mb-3">
            <label htmlFor="Pattern" className="form-label">
              Design/Pattern :
            </label>
            <input
              type="text"
              className={`form-control ${patternValid ? "" : "is-invalid"}`}
              id="Pattern"
              placeholder="Enter Short Description"
              value={patten}
              onChange={(e) => {
                setPattern(e.target.value);
                validatePattern(e.target.value);
              }}
            />
            {!patternValid && (
              <div className="invalid-feedback">Please enter a valid pattern.</div>
            )}
          </div>
  
          <div className="mb-3">
            <label htmlFor="Usage" className="form-label">
              Usage Note :
            </label>
            <textarea
              className={`form-control ${usageValid ? "" : "is-invalid"}`}
              id="Usage"
              placeholder="Enter Usage Note"
              value={usage}
              onChange={(e) => {
                setUsage(e.target.value);
                validateUsage(e.target.value);
              }}
            />
            {!usageValid && (
              <div className="invalid-feedback">Please enter a valid usage note.</div>
            )}
          </div>
  
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
  

