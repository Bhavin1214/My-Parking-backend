const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt")

const signUpUser = async (req,res)=>{

    try { 
        const salt = bcrypt.genSaltSync(10)
        const hasedPassword = bcrypt.hashSync(req.body.password,salt)
        req.body.password=hasedPassword;
        const createUser = await userModel.create(req.body)

        res.status(201).json({
            message:"user created",
            data: createUser
        });  
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:"error",
            data:error
        });
    }
};

const loginUser = async(req,res)=>{
       const email = req.body.email
       const password= req.body.password

       const foundUserEmailFormUser = await userModel.findOne({email:email}).populate("roleId")
       if (foundUserEmailFormUser != null) {
            const isMatch = bcrypt.compareSync(password,foundUserEmailFormUser.password) 
            if (isMatch==true) {
                res.status(200).json({
                    message:"login sucess",
                    data:foundUserEmailFormUser 
                })
            } else {
                res.status(404).json({
                    message:"invalid cred.."
                })
            }       
       } else {
        res.status(404).json({
            message:"email not found,please register"
        })
       }
};

const getAllUser =async (req,res)=>{

    const allUser = await userModel.find().populate("roleId")

    res.json({
        message:"all user are given below",
        data: allUser
    })
};

const deleteUser = async (req,res)=>{
    
    const deletedUser = await userModel.findByIdAndDelete(req.params.id)

    res.json({
        message:"user deleted success",
        data:deletedUser
    })
};

const getUserById = async (req,res)=>{

    const user = await userModel.findById(req.params.id)

    res.json({
        message:"user that you want",
        data:user
    })
}

module.exports ={
    // addUser,
    getAllUser,deleteUser,getUserById,signUpUser,loginUser
}