const mongoose = require("mongoose")
const schema = mongoose.Schema;

const userSchema = new schema({
    roleId: {
        type: schema.ObjectId,
        ref: "roles",
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    contactNum: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Security', 'User', 'ParkingOwner'],
        required: true
    },
    otp: {
        type: Number
    },
    securityAmount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("users",userSchema)

