const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        trim:true,
        required: true
    },
    role:{
        type:String,
        default:"user"
    },
    pendingDoubt:{
        id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Doubts' },
        status:Boolean

    },
    doubtsResolved:{
        type:String,
    },
    doubts:[
        { type: mongoose.Schema.Types.ObjectId, ref: 'Doubts' }
    ]
},{
    timestamps: true
})
userSchema.pre('save', async function(next){
    if(!this.isModified('password'))
    {
        next();
    }
    else{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);

}
const User = mongoose.model("User", userSchema);
module.exports = User;