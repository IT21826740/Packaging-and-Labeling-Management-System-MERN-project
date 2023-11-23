const express = require('express');
const router = express.Router();
const Order = require('../models/comOrder');



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
