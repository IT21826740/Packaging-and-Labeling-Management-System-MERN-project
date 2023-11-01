const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({

    name :{
        type: String,
        required : true
    },
   date :{
        type: String,
        required : true
    },
    state :{
        type: String,
    },

})

const Pending = mongoose.model("Order", orderSchema);

module.exports = Pending;


/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    state: { type: String },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    orderID: { type: String, required: true },
    weight: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    product: { type: Number, required: true },
    packagingType: { type: String, required: true },
    wrappingPaper: { type: String },
    ribbonColor: { type: String },
    wish: { type: String },
});

const Pending = mongoose.model("Order", orderSchema);
module.exports = Pending;*/
