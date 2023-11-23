
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./MSearchBar"; // Import the SearchBar component
import  "../../Styles/AllMaterial.css";
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function AllMaterials() {
  const [materials, setMaterials] = useState([]);
  const [editMaterialData, setEditMaterialData] = useState({
    id: null,
    name: "",
    dimention: "",
    patten: "",
    usage: "",
  });

  useEffect(() => {
    const getMaterials = () => {
      axios
        .get("http://localhost:5000/material/read")
        .then((res) => {
          setMaterials(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    getMaterials();
  }, []);

  const handleEdit = (materialId) => {
    // Find the material to edit by its ID
    const materialToEdit = materials.find((material) => material._id === materialId);

    // Set the editMaterialData state with the material's data
    if (materialToEdit) {
      setEditMaterialData({
        id: materialToEdit._id,
        name: materialToEdit.name,
        dimention: materialToEdit.dimention,
        patten: materialToEdit.patten,
        usage: materialToEdit.usage,
      });
    }
  };

  const handleDelete = (materialId) => {
    // Send a DELETE request to your backend to delete the material by ID
    const confirmDeletion =window.confirm("Are you sure you want to delete this ?");

    if (confirmDeletion){
    axios
      .delete(`http://localhost:5000/material/delete/${materialId}`)
      .then((res) => { 
        if (res.status === 200) {
          // Material deleted successfully, update the frontend
          setMaterials(materials.filter((material) => material._id !== materialId));
        }
        
      })
      .catch((err) => {
        console.log(err.message);
        alert(err);
      });
    }
  };

  const handleUpdate = () => {
    // Send a PUT request to your backend to update the material using the editMaterialData
    const confirmUpdate =window.confirm("Are you sure you want to update this ?");

    if (confirmUpdate){
    axios
      .put(`http://localhost:5000/material/update/${editMaterialData.id}`, editMaterialData)
      .then((res) => {
        if (res.status === 200) {
          // Material updated successfully, refresh the material list
          const updatedMaterials = materials.map((material) =>
            material._id === editMaterialData.id ? editMaterialData : material
          );
          setMaterials(updatedMaterials);
          setEditMaterialData({
            id: null,
            name: "",
            dimention: "",
            patten: "",
            usage: "",
          });
        }
        alert(" Successfully Updated !");
      })
      .catch((err) => {
        console.log(err.message);
            });
    }     
  }; 


  const getMaterials = (searchTerm = "") => {
    axios
      .get(`http://localhost:5000/material/search?name=${searchTerm}`)
      .then((res) => {
        setMaterials(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  const handleSearch = (searchTerm) => {
    getMaterials(searchTerm);
  };
  
    // Function to generate and download the PDF report
    const handleExportReport = () => {
      const doc = new jsPDF();
      const tableColumn = ["Name", "Measurements", "Pattern", "Usage"];
      const tableRows = [];
  
      materials.forEach((material) => {
        const matData = [
          material.name,
          material.dimention,
          material.patten,
          material.usage,
        ];
  
        tableRows.push(matData);
      });
  
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
  
      doc.autoTable(tableColumn, tableRows, { startY: 20 });
      doc.text("All Packaging Material", 14, 15);
      doc.save(`Materials_${year}` + " " + `${month}` + " " + `${day}` + ".pdf");

      // Display an alert when download is successful
      window.alert("Report downloaded successfully!");
    };

  return (

    <div className="Mbackground">
       
    <div className="container flex" style={{border:"1px solid black", marginTop:"15px"}}>

      <br/>
      <h3 style={{ textAlign: 'center' }}> PACKAGING INVENTORY</h3>
      <br/>

      <SearchBar onSearch={handleSearch} />

      <br/>
      <button className="bttn">
      <a className ="nav-link" href="/AddMaterial">+ Add New Material</a> 
      </button>
      
      <button className="bttn" onClick={handleExportReport} style={{marginLeft:"10px"}} >Export Report</button>
      <br/>
      <br/>
      <table className="flex">
        <thead >
          <tr className={"table-data"} >
            <th className="table-head">Name</th>
            <th>Measurements</th>
            <th>Pattern</th>
            <th>Usage</th>
            <th>     </th>

            <th>     </th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material._id} className="m-data">
              <td>{material.name}</td>
              <td>{material.dimention}</td>
              <td>{material.patten}</td>
              <td>{material.usage}</td>
              <td>
                <button className="bttn" onClick={() => handleEdit(material._id)}>Edit</button>
                </td> 
                <td>
                <button className="bttn" onClick={() => handleDelete(material._id)} >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Edit Material Form */}
      {editMaterialData.id && (
        <div>
          <h4>Edit Material</h4>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={editMaterialData.name}
              onChange={(e) =>
                setEditMaterialData({ ...editMaterialData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Dimension"
              value={editMaterialData.dimention}
              onChange={(e) =>
                setEditMaterialData({ ...editMaterialData, dimention: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Pattern"
              value={editMaterialData.patten}
              onChange={(e) =>
                setEditMaterialData({ ...editMaterialData, patten: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Usage"
              value={editMaterialData.usage}
              style={{width:"45%"}}
              onChange={(e) =>
                setEditMaterialData({ ...editMaterialData, usage: e.target.value })
              }
            />
            <button className="bttn" onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
      
    </div>
    </div> 
  );
}

export default AllMaterials;

