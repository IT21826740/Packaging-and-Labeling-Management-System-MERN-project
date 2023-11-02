/*import React, {useState} from "react"
import axios from "axios";
//import '../AddMaterial';
import "../../Styles/AddMaterial.css"

export default function AddOrder(){

    const [name,setOrder]=useState("");
    const [date ,setDate ]=useState("");
    const [state,setState]=useState("");
    const [address,setAddress]= useState("");
    const [contactNumber,setContactNumber]=useState("");
    const [orderID,setOrderID]= useState("");
    const [weight,setweight]=useState("");
    const [totalPrice,setTotalPrice]=useState("");
    const [product,setProduct]=useState("");
    const [packagingType,setPackaginType]=useState("");
    const [wrappingPaper,setWrappingPaper]=useState("");
    const [ribbonColor,setRibbonColor]=useState("");
    const [wish,setWish]=useState("");

    function sendData (e){
      e.preventDefault();

      const pendingOrder ={
        name,
        date,
        state,
        address,
        contactNumber,
        orderID,
        weight,
        totalPrice,
        product,
        packagingType,
        wrappingPaper,
        ribbonColor,
        wish,
        
    }

       console.log(pendingOrder)
       // connect with backend
       axios.post("http://localhost:5000/Order/add",pendingOrder).then(()=>{
        alert("Order Success !");
        setOrder("");
        setDate("");
        setState("");
        setAddress("");
        setContactNumber("");
        setOrderID("");
        setweight("");
        setTotalPrice("");
        setProduct("");
        setPackaginType("");
        setWrappingPaper("");
        setRibbonColor("");
        setWish("");

       })
       .catch((err)=>{
        alert(err)
       });


    }


    return (

    <div className="container-1" style={{ width: '600px' }}>
      <form onSubmit={sendData}>
        <br/>
        <h3>ORDER</h3>
        <br/>

        <div className="mb-3">
          <label for="Name" className="form-label">Name :</label>
          <input type="text" className="form-control" id="Name" placeholder="Enter name" 
          onChange={(e)=>{

            setOrder(e.target.value);

          }}/>

        </div>


        <div className="mb-3">
          <label for="Size" className="form-label">Date :</label>
          <input type="text" className="form-control" id="Size" placeholder="Enter Date" 
          onChange={(e)=>{

            setDate(e.target.value);

          }}/>
        </div>


        <div className="mb-3">
          <label for="Patten" className="form-label">State  :</label>
          <input type="text" className="form-control" id="Patten" placeholder="customized order or non - customized order"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">Address  :</label>
          <input type="text" className="form-control" id="address" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">contact number:</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">order id  :</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">weight  :</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">totalPrice :</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">product  :</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">packagingType :</label>
          <input type="text" className="form-control" id="Patten" placeholder="customized packaging or non-customized packaging"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">wrappingPaper  :</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">ribbonColor  :</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <div className="mb-3">
          <label for="Patten" className="form-label">wish  :</label>
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div> 

    )
  }
*/
  
