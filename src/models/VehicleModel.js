const mongoose = require("mongoose")
const schema = mongoose.Schema

const vehicleSchema = new schema({
    vehicleNumber:{
        type:String,
        required:true,
    },
    vehicleType:{
        type:String,
        Enum:['2 wheeler','4 wheeler'],
        required:true
    },
    userID:{
        type:schema.ObjectId,
        ref:"user"
    }
},{timestamps:true})

module.exports = mongoose.model("vehicle",vehicleSchema)