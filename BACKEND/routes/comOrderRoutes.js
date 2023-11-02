const express = require('express');
const router = express.Router();
const Order = require('../models/comOrder');

/*
// Create a new order
router.post('/create', async (req, res) => {
  try {
    const {
      orderID,
      weight,
      totalPrice,
      date,
      state,
      type,
      wrappingPaper,
      ribbonColor,
      customerWishes,
    } = req.body;

    const newOrder = new Order({
      orderID,
      weight,
      totalPrice,
      date,
      state,
      type,
      wrappingPaper,
      ribbonColor,
      customerWishes,
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: 'Error creating the order' });
  }
});

*/

//read one
router.route("/get/:id").get (async(req,res) =>{
  let orderID =req.params.id;
  await CompleteOrder.findById(orderID)
  .then(()=>{
      res.status(200).send({status: " Order Fetched" , cmOrder});
  }).catch((err) => {
      console.log(err);
      res.status(500).send({status : "Error with get material",error:err.message});
  })

})

module.exports = router;
