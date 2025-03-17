const stateModel = require('../models/StateModel');

const addState = async (req, res) => {
   try {
    const savedState = await stateModel.create(req.body);
    res.status(201).json({
        message: 'Data created successfully',
        data: savedState
    });

   } catch (error) {
         res.status(500).json({
              message: 'Data not created',
              error: error
         });
   }
    
}

const getAllState = async (req, res) => {
    try {
        const states = await stateModel.find();
        res.json({
            message: 'Data fetch successfully',
            data: states
        });
    } catch (error) {
        res.status(500).json({
            message: 'Data not fetch',
            error: error
        });

    }
   
}

module.exports = {
    addState, getAllState
}