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

const port=  process.env.port || 2400;
app.use("/", function(req, res){
    
    res.status(404).json({
        "message":`No routes with url http://localhost:5000${req.url} exists!`,
        "request":"Sorry"
    })
})
app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }
    console.log(`${port} started!`);
})