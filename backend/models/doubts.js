const mongoose = require('mongoose');


const doubtModel = mongoose.Schema({
    doubt:{
        type: String,
        required:true,
    },
    doubtAssigned:{
        type: String,
    },
    "doubtStatus":{
        type: String,
        default:"doubt_raised",
        required:true,
    },
    comments:[
        {type:String}
    ],
    Answer:{
        type:String
    },
    description:{
        type:String
    },
    doubtBy:{
        type:String
    }
    
},{
    timestamps: true,
})

const Doubts= mongoose.model("Doubts", doubtModel);
module.exports = Doubts