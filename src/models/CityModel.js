const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: true
    }

},{timestamps: true});
const CityModel = mongoose.model('City', CitySchema);