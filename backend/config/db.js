const mongoose = require('mongoose');

const db = async ()=>{
    try{
        connectdb =  await mongoose.connect(process.env.mongoPRODURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("MongoDB connected at:",connectdb.connection.host)
    }catch(Err)
    {
        console.log(Err);
        process.exit();
    }
};


module.exports = db;