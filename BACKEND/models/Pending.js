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



