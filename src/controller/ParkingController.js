const ParkingModel = require("../models/ParkingModel");
const parkkingModel = require("../models/ParkingModel")

const addParking = async (req,res)=>{
    try {
        const savedParking = await parkkingModel.create(req.body)
        res.status(201).json({
            message:"new parking is created",
            data:savedParking
        })


    } catch (error) {
        res.status(500).json({
            message:"parking is not added",
            error: error
        })
    }
};

const getAllPakring = async (req,res)=>{
    try {
        const allParking = await ParkingModel.find(req.body)
        res.status(201).json({
            message:"all parkings are given below",
            data: allParking
        })
    } catch (error) {
        res.status(500).json({
            message:"something went wrong",
            error : error
        })
    }
};

module.exports = {
    addParking,
    getAllPakring
}