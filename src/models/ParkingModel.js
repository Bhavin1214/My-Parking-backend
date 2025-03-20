const mongoose = require("mongoose")
const schema = mongoose.Schema;

const parkingSchema = new schema({
    title:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true
    },
    locationid:{
        type:schema.Types.ObjectId,
        ref:"location",
        required:true
    },
    ownerid:{
        type:schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    totalCapacityTwoWheeler:{
        type:Number,
        required:true
    },
    totalCapacityFourWheeler:{
        type:Number,
        required:true
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    },
    hourlyChargeTwoWheeler:{
        type:Number,
        required:true
    },
    hourlyChargeFourWheeler:{
        type:Number,
        required:true
    },
    parkingType:{
        type:String,
        Enum:["road","ground","building","underGround"]
    },
    latitude:{
        type:schema.Types.ObjectId,
        ref:"location",
        required:true
    },
    longitude:{
        type:schema.Types.ObjectId,
        ref:"location",
        required:true
    }  
},{timestamps:true});

module.exports = mongoose.model("parking",parkingSchema)