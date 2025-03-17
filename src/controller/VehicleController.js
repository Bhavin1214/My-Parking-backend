const vehicleModle= require("../models/VehicleModel")

const addVehicle = async (req,res)=>{
    try {
        const savedVehicle = await vehicleModle.create(req.body)
        res.status(201).json({
            message: "vehicle created",
            data: savedVehicle
        })
    } catch (error) {
        res.status(500).json({
            message:"vehicle not created",
            data:error
        })
    }
};

const getVehicle = async (req,res) => {
    try {
        const allVehicles = await vehicleModle.find()
        res.status(200).json({
            message:"vehical created",
            data: allVehicles
        })
    } catch (error) {
        res.status(500).json({
            message:"can not find vahicles",
            data:error
        })
    }
};


module.exports = {
    addVehicle,
    getVehicle
}