const express = require("express");
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require("cors")
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();




const PORT=process.env.PORT||5000


//middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const URL = process.env.MONGODB_URL


// connect db
mongoose.connect(URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true   
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})


// access routes files
//materials
const MaterialRouter = require("./routes/Materials.js")
app.use("/material",MaterialRouter);

const OrderRouter = require("./routes/Pendings.js")
app .use("/order", OrderRouter);

//Reward
const excelDataRoutes = require('./routes/excelRoutes.js');
app.use("/excel",excelDataRoutes);

const excelRoutes = require('./routes/excelRoutes');
app.use('/api/excel', excelRoutes);

const fileRoutes = require("./routes/fileRoutes");
app.use("/file", fileRoutes)

const emailRoutes = require('./routes/emailRoutes');
app.use('/api/email', emailRoutes);


//complete order
const CompleteOrderRoutes = require('./routes/comOrderRoutes.js');
app.use('/cmOrder',CompleteOrderRoutes)


//inventory
const InfileRoutes = require("./routes/InvenoryFileRoutes.js");
app.use("/infile", InfileRoutes)

const InexcelDataRoutes = require('./routes/InventoryExcelRoutes.js');
app.use("/inexcel",InexcelDataRoutes);
  


app.listen(PORT, () => {
    console.log(`Server is up and running on port number : ${PORT}`);
})


