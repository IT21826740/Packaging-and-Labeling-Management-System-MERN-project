const router = require("express").Router();
const Order = require("../models/Pending"); 


// insert new material
router.route("/add").post((req,res)=>{

    const name =req.body.name;
    const date =req.body.date;
    const state = req.body.state;
   

    const pendingOrder = new Order({

        name,
        date,
        state,
       
    })

    pendingOrder.save().then(() =>{
        res.json("Material Added success!")
    }).catch((err)=>{
        console.log(err);
    })

})

// Update
router.route("/update/:id").put(async (req, res) => {
    const orderId = req.params.id;
    const { name, date, state } = req.body;

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { name, date, state },
            { new: true } // Set to true to return the updated document
        );

        if (!updatedOrder) {
            return res.status(404).send({ status: "Material not found" });
        }

        res.status(200).send({ status: "updated", order: updatedOrder });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    }
});

//All data Read 
router.route("/read").get(async(req,res)=>{ 
   
    //call material model
    Order.find().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err);
        
    })

})


//delete

router.route("/delete/:id").delete(async(req,res) => {
    let orderId = req.params.id;

    await Order.findOneAndDelete(orderId).then (() => {
        res.status(200).send({status: " Deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : " Error with delete data",error:err.message});
    })

})


//read one 

router.route("/get/:id").get (async(req,res) =>{
    let orderId =req.params.id;
    await Order.findById(orderId)
    .then(()=>{
        res.status(200).send({status: " Order Details Fetched" , order});
    }).catch((err) => {
        coconsole.log(err);
        res.status(500).send({status : "Error with get order Details",error:err.message});
    })

})

module.exports = router; 

/*
// All data Read with counts
router.route("/read").get(async (req, res) => {
    try {
        // Count orders in each category
        const allCount = await Order.countDocuments();
        const customizedCount = await Order.countDocuments({ state: "customized" });
        const nonCustomizedCount = await Order.countDocuments({ state: "non-customized" });

        // Fetch all orders
        const orders = await Order.find();

        // Return data along with counts
        res.json({
            orders,
            allCount,
            customizedCount,
            nonCustomizedCount,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error with fetching data", error: err.message });
    }
});


module.exports = router; 

/*
const express = require("express");
const Order = require("../models/Pending"); 
const router = express.Router();

// insert new material
router.route("/add").post((req,res)=>{

    const name =req.body.name;
    const date =req.body.date;
    const state = req.body.state;
    const address =req.body.address;
    const contactNumber =req.body.contactNumber;
    const orderID = req.body.orderID;
    const weight =req.body.weight;
    const totalPrice =req.body.totalPrice;
    const product = req.body.product;
    const packagingType =req.body.packagingType;
    const wrappingPaper =req.body.wrappingPaper;
    const ribbonColor = req.body.ribbonColor;
    const wish = req.body.wish;
   

    const pendingOrder = new Order({

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
        
       
    })

    pendingOrder.save().then(() =>{
        res.json("Order Added success!")
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({ message: "Error adding order" });
    });

})


//delete

router.route("/delete/:id").delete(async(req,res) => {
    let orderId = req.params.id;

    await Order.findOneAndDelete(orderId).then (() => {
        res.status(200).send({status: " Deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : " Error with delete data",error:err.message});
    })

})


//read one 

router.route("/get/:id").get (async(req,res) =>{
    let orderId =req.params.id;
    await Order.findById(orderId)
    .then(()=>{
        res.status(200).send({status: " Order Details Fetched" , order});
    }).catch((err) => {
        coconsole.log(err);
        res.status(500).send({status : "Error with get order Details",error:err.message});
    })

})


//All data Read 
router.route("/read").get(async(req,res)=>{ 
   
    //call material model
    Order.find().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err);
        
    })

})

/*
// All data Read with counts
router.route("/read").get(async (req, res) => {
    try {
        // Count orders in each category
        const allCount = await Order.countDocuments();
        const customizedCount = await Order.countDocuments({ state: "customized" });
        const nonCustomizedCount = await Order.countDocuments({ state: "non-customized" });

        // Fetch all orders
        const orders = await Order.find();

        // Return data along with counts
        res.json({
            orders,
            allCount,
            customizedCount,
            nonCustomizedCount,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: "Error with fetching data", error: err.message });
    }
});


module.exports = router;*/