require('dotenv').config(); // load the .env file -> process.env.PORT for example

const express = require('express');
const cors = require('cors');

const app = express();
// when different application from different 
// ports are trying to comunicate eachother.
// that's why we need cors

//Connection to MongoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI)
.then(()=>console.log("Connected to database!"))
.catch(err => console.log(err))

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", require("./routes/routes"));

const port = process.env.PORT;
app.listen(port,()=>console.log(`Server running in port ${port}`));