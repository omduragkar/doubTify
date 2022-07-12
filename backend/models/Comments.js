const mongoose = require('mongoose');


const commentModel = mongoose.Schema({
    comment:{
        type: String,
        required:true,
    },
    onDoubt:{ type: mongoose.Schema.Types.ObjectId, ref: 'Doubts' },
    by:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    
    
},{
    timestamps: true,
})

const Comments= mongoose.model("Comments", commentModel);
module.exports = Comments