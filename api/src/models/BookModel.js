const Mongoose = require("mongoose")

const bookSchema = Mongoose.Schema({
    bookName:{
        type:String,
        require:true,
        unique:true
    },
    author:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    comments: {type :String}
},
{timestamps:true, versionKey:false}
)

module.exports = Mongoose.model("BookStore", bookSchema)