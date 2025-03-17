const locationModel = require("../models/LocationModel");

const addLocation = async (req, res) => {

    try {
        const savedLocation = await locationModel.create(req.body)

        res.status(201).json({
            message: "location create sucsses",
            data: savedLocation
        })
    }
    catch (error) {
        res.status(500).json({
            message: "lacation not created",
            data: error
        })
    }
}

const getLocation = async (req,res)=>{
    try {
        const allLocation = await locationModel.find()
        res.status(200).json({
            message:"locations are shown below",
            data: allLocation
        })
    } catch (error) {
        res.status(500).json({
            message:"can not find location",
            data: error
        })
    }
}

module.exports = {
    addLocation,
    getLocation
}