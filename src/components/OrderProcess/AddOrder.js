/*import React, {useState} from "react"
import axios from "axios";
//import '../AddMaterial';
import "../../Styles/AddMaterial.css"

export default function AddOrder(){

    const [name,setOrder]=useState("");
    const [date ,setDate ]=useState("");
    const [state,setState]=useState("");
    

    function sendData (e){
      e.preventDefault();

      const pendingOrder ={
        name,
        date,
        state,
        
    }

       console.log(pendingOrder)
       // connect with backend
       axios.post("http://localhost:5000/Order/add",pendingOrder).then(()=>{
        alert("Order Success !");
        setOrder("");
        setDate("");
        setState("");

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
          <input type="text" className="form-control" id="Patten" placeholder="State"
          onChange={(e)=>{

            setState(e.target.value);

          }}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div> 

    )
  }*/



/*import React, { useState } from "react";
import axios from "axios";
import "../../Styles/AddMaterial.css";

export default function AddOrder() {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [orderID, setOrderID] = useState("");
    const [weight, setWeight] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [product, setProduct] = useState("");
    const [packagingType, setPackagingType] = useState("");
    const [wrappingPaper, setWrappingPaper] = useState("");
    const [ribbonColor, setRibbonColor] = useState("");
    const [wish, setWish] = useState("");

    function sendData(e) {
        e.preventDefault();

        const pendingOrder = {
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
        };

        axios.post("http://localhost:5000/order/add", pendingOrder)
            .then(() => {
                alert("Order Success!");
                setName("");
                setDate("");
                setState("");
                setAddress("");
                setContactNumber("");
                setOrderID("");
                setWeight("");
                setTotalPrice("");
                setProduct("");
                setPackagingType("");
                setWrappingPaper("");
                setRibbonColor("");
                setWish("");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="container-1" style={{ width: '600px' }}>
            <form onSubmit={sendData}>
                <br />
                <h3>ORDER</h3>
                <br />

                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Name"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="date"
                        placeholder="Enter Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="Enter state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">contac tNumber :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactNumber"
                        placeholder="Enter contactNumber"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="orderID" className="form-label"> orderID :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderID"
                        placeholder="Enter  orderID"
                        value={ orderID}
                        onChange={(e) => setOrderID(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="weight" className="form-label"> weight :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="weight"
                        placeholder="Enter  orderID"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="totalPrice" className="form-label"> totalPrice :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="totalPrice"
                        placeholder="Enter  orderID"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="product" className="form-label"> product :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="product"
                        placeholder="Enter  orderID"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="packagingType" className="form-label"> packagingType :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="packagingType"
                        placeholder="Enter  orderID"
                        value={packagingType}
                        onChange={(e) => setPackagingType(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wrappingPaper" className="form-label"> wrappingPaper :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="wrappingPaper"
                        placeholder="Enter  orderID"
                        value={wrappingPaper}
                        onChange={(e) => setWrappingPaper(e.target.value)}
                    />
                </div>
                

                <div className="mb-3">
                    <label htmlFor="ribbonColor" className="form-label">  ribbonColor :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="ribbonColor"
                        placeholder="Enter  orderID"
                        value={ ribbonColor}
                        onChange={(e) => setRibbonColor(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wish" className="form-label">  wish :</label>
                    <input
                        type="text"
                        className="form-control"
                        id="wish"
                        placeholder="Enter  orderID"
                        value={ wish}
                        onChange={(e) => setWish(e.target.value)}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
*/


  
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
