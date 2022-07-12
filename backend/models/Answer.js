const mongoose = require('mongoose');


const AnswerModel = mongoose.Schema({
    Answer:{
        type: String,
        required:true,
    },
    onDoubt:{ type: mongoose.Schema.Types.ObjectId, ref: 'Doubts' },
    by:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    
},{
    timestamps: true,
})

const Answers= mongoose.model("Answers", AnswerModel);
module.exports = Answers