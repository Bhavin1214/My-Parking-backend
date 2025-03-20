const mongoose = require("mongoose");
const schema = mongoose.Schema;

const locationSchema = new schema({
    name:{
        type:String,
        required:true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("location",locationSchema)