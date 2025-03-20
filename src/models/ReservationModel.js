const mongoose = require("mongoose")
const schema = mongoose.Schema;

const reservationSchema = new schema({
    userid:{
        type:schema.Types.ObjectId,
        ref : "user",
        required:true
    },
    parkingid:{
        type:schema.Types.ObjectId,
        ref : "parking",
        required:true
    },
    vehicleid:{
        type:schema.Types.ObjectId,
        ref : "vehicle",
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    starttime:{
        type:String,
        required:true
    },
    endtime:{
        type:String,
        required:true
    },
    paymentStatus:{
        type:String,
        Enum : ["pending","complete","failed"],
        required:true
    },
    amountPaid:{
        type:Number,//add the object id of parkingowner for amount load
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model("reservation",reservationSchema);