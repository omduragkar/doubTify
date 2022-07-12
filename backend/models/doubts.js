const mongoose = require('mongoose');


const doubtModel = mongoose.Schema({
    doubt:{
        type: String,
        required:true,
    },
    doubtAssigned:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    "doubtStatus":{
        type: String,
        default:"doubt_raised",
        required:true,
    },
    comments:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'Comments' }
    ],
    Answer: { type: mongoose.Schema.Types.ObjectId, ref: 'Answers' },
    description:{
        type:String
    },
    doubtBy:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    
    
},{
    timestamps: true,
})

const Doubts= mongoose.model("Doubts", doubtModel);
module.exports = Doubts