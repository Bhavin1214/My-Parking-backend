const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    stateId: {
        type: Schema.Types.ObjectId,
        ref: 'State'
    },
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    pincode: {
        type: Number,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model('Area', AreaSchema);