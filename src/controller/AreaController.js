const areamodel = require('../models/AreaModel');

const addArea = async (req, res) => {
    try {
        const savedArea = await areamodel.create(req.body);
        res.status(201).json({
            message: 'Data created successfully',
            data: savedArea
        });

    } catch (error) {
        res.status(500).json({
            message: 'Data not created',
            error: error
        });
    }
}

const getAllArea = async (req, res) => {
    try {
        const areas = await areamodel.find();
        res.json({
            message: 'Data fetch successfully',
            data: areas
        });
    } catch (error) {
        res.status(500).json({
            message: 'Data not fetch',
            error: error
        });

    }
}

module.exports = {
    addArea, getAllArea
}