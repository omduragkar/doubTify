const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Tickets = require("../models/doubts");
const bcrypt = require('bcrypt');
const mongodb  = require('mongodb');

// @desc POST /api/User/login
module.exports.userLogin =  async (req, res)=>{
    const x = req.body;
    const user = await User.findOne({email:x.email}); 
    if(user && (await bcrypt.compare(x.password, user.password)))
    {
        let token = "Bearer " + createToken(user._id);
        let luser ={token};
        Object.assign(luser, user);
        user.password ="";
        res.json({...luser._doc, token})
    }
    else{
        res.status(400).json({
            "message":"Invalid Email or Password!"
        })
    }

}


function somePromiseMethod(name){
    return new Promise(async (resolve,reject) => {
        let open_tickets = await Tickets.find({status:name}).count();
        resolve({[name]: open_tickets})
    });
}


// @desc POST /api/user/createlocal
module.exports.userCreate =  expressAsyncHandler(async (req, res)=>{
    const x = req.body;
    if((!x.email || !x.name || !x.password || !x.confirmpassword || !x.role ) ){
        res.status(400).json({
            "message":"Please fill all the fields"
        })
    }else if(x.password != x.confirmpassword){
        res.status(400).json({
            "message":"Incoreect Password and Confirm Password"
        })
        
    }else{
        console.log({role:x.role == "user", r:x.role})
        const user = await User.findOne({email:x.email}); 
        if(!user)
        {
            let user = await User.create({
                name:x.name,
                email: x.email,
                password: x.password,
                role:x.role || "user"
            });
            if(user){
                
                res.json({
                    name: user.name,
                    email: user.email,
                    role:user.role,
                    token: "Bearer " + createToken(user._id),
                });
            }else{
                res.status(400).json({
                    message:"Error in creating User"
                })
            }
        }else{
            res.status(400).json({
                message:"User Already Exists!"
            })
        }
        
    }
    

})


let createToken = function (id){
    return jwt.sign({id},process.env.secret_key,{
        expiresIn:"20d"
    })
    
}