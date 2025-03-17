const citymodel = require('../models/citymodel');

const addCity = async (req, res) => {
    try {
        const savedCity = await citymodel.create(req.body);
        res.status(201).json({
            message: 'Data created successfully',
            data: savedCity
        });
    } catch (error) {
        res.status(500).json({
            message: 'Data not created',
            error: error
       });
    }
}

const getAllCity = async (req, res) => {
    try {
        const cities = await citymodel.find();
        res.json({
            message: 'Data fetch successfully',
            data: cities
        });
    } catch (error) {
        res.status(500).json({
            message: 'Data not fetch',
            error: error
        });
    }
}
 
module.exports = {
    getAllCity, addCity
}