const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({

    name :{
        type: String,
        required : true
    },
    dimention :{
        type: String,
        required : true
    },
    patten :{
        type: String,
        required : true
    },
    usage :{
        type: String,
        required : true
    }

})

const NewMaterial = mongoose.model("Material", materialSchema);

module.exports = NewMaterial;