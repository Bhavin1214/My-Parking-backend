const reservationModel = require("../models/ReservationModel")

const reserve = async (req,res)=>{
    try {
        const reservationData = await reservationModel.create(req.body)
        res.status(201).json({
            message:"reservation complete",
            data : reservationData
        })
    } catch (error) {
        res.status(500).json({
            message:"something went wrong",
            error : error
        })
    }
};

const getreservedData = async (req,res)=>{
    try {
        const allreservationData = await reservationModel.find(req.body)
        res.status(201).json({
            message:"all reservations",
            data : allreservationData
        })
    } catch (error) {
        res.status(500).json({
            message:"something went wrong",
            error : error
        })
    }
};

module.exports = {
    reserve,
    getreservedData
}