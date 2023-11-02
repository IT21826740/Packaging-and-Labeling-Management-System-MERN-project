const express = require('express');
const Material = require("../models/NewMaterial");
const router = express.Router();
// insert new material
router.route("/add").post((req,res)=>{

    const name =req.body.name;
    const dimention =req.body.dimention;
    const patten = req.body.patten;
    const usage = req.body.usage;

    const newMaterial = new Material({

        name,
        dimention,
        patten,
        usage
    })

    newMaterial.save().then(() => {
        res.json({ message: "Material Added successfully!" });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: "Error adding material" }); 
    });
})


//All data Read 
router.route("/read").get(async(req,res)=>{ 
   
    //call material model
    Material.find().then((materials)=>{
        res.json(materials)
    }).catch((err)=>{
        console.log(err);
        
    })

})


// Update
router.route("/update/:id").put(async (req, res) => {
    const materialId = req.params.id;
    const { name, dimention, patten, usage } = req.body;

    try {
        const updatedMaterial = await Material.findByIdAndUpdate(
            materialId,
            { name, dimention, patten, usage },
            { new: true } // Set to true to return the updated document
        );

        if (!updatedMaterial) {
            return res.status(404).send({ status: "Material not found" });
        }

        res.status(200).send({ status: "updated", material: updatedMaterial });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error with updating data", error: err.message });
    }
});



//delete

router.route("/delete/:id").delete(async(req,res) => {
    let materialId = req.params.id;

    await Material.findOneAndDelete(materialId).then (() => {
        res.status(200).send({status: " Deleted" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status : " Error with delete data",error:err.message});
    })

})


//read one 

router.route("/get/:id").get (async(req,res) =>{
    let materialId =req.params.id;
    await Material.findById(materialId)
    .then(()=>{
        res.status(200).send({status: " Material Fetched" , material});
    }).catch((err) => {
        coconsole.log(err);
        res.status(500).send({status : "Error with get material",error:err.message});
    })

})


//Search
// Update the "read" route to accept a query parameter for searching by name
router.route("/search").get(async (req, res) => {
    const { name } = req.query;
  
    const query = {};
  
    if (name) {
      // If a name query parameter is provided, add it to the query
      query.name = { $regex: new RegExp(name, "i") }; // Case-insensitive search
    }
  
    try {
      const materials = await Material.find(query);
      res.json(materials);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  });
  


module.exports = router;