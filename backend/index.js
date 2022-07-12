const express = require('express');
const userroutes = require('./routes/userRoutes'); 
const doubtRoutes = require('./routes/doubtRoutes'); 
const db = require('./config/db');
require("dotenv").config();
const app = express();
db();
var cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/api/user', userroutes);

app.use('/api/doubts', doubtRoutes);

// app.use('/api/ticket', ticketRoutes);

app.get("/", function(req, res){
    res.send("Hello World! App started!")
})
const port=  process.env.PORT || 3000;
app.use("/", function(req, res){
    
    res.status(404).json({
        "message":`No routes with url https://backendfordoubtify.herokuapp.com/${req.url} exists!`,
        "request":"Sorry"
    })
})
app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`${port} started!`);
})