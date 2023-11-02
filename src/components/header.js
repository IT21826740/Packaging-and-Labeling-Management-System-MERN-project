import React, { useState } from "react";

function Header() {

  return (

    <nav className ="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#f4b92f"}} >
  <div className ="container-fluid" style={{backgroundColor:"#f4b92f"}}>
    <a className ="navbar-brand" href="#">ARTICRAFT</a>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav me-auto mb-2 mb-lg-0">


        <li className ="nav-item">
          <a className ="nav-link active"  aria-current="page" href="/AllMaterials">All Materials</a> 
        </li>

        <li className ="nav-item">
          <a className ="nav-link" href="/AddMaterial">Add Materials</a>   
        </li>
        

        <li className ="nav-item">
          <a className ="nav-link" href="/PendingOrders">Pending Orders</a>
        </li>

        <li className ="nav-item">
          <a className ="nav-link" href="/CompleteOrder">Complete Order</a>
        </li>
 
 
        <li className ="nav-item">
          <a className ="nav-link" href="/GenerateLabel">GenerateLabel</a> 
        </li>

        <li className ="nav-item">
          <a className ="nav-link" href="/PrintLabel">Print label</a> 
        </li>

        <li className ="nav-item">
          <a className ="nav-link" href="/Timer">Reward</a> 
        </li>

       <li className ="nav-item">
          <a className ="nav-link" href="/InventoryFileUpload">Inventory </a> 
        </li>

       

      </ul>
      
    </div>
  </div>
</nav>

  )

}

export default Header;
