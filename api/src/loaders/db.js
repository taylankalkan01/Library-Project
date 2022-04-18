const Mongoose = require("mongoose")

 const connectDB=Mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@node.sy0fa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
    ,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connected"))
    .catch((error)=>{
        console.log(error);
    })


module.exports = connectDB;
