const roleModel = require("../models/RoleModel")

const getAllrole = async (req,res)=>{

   const roles = await roleModel.find()

    res.json({
        message:"data fetch successfully",
        data: roles 
    });

};

const addRole = async (req,res) => {
       
    const savedRole= await roleModel.create(req.body)

    res.json({
        message:"data created succssfully",
        data: savedRole
    })
};

const deleteRole = async (req,res)=>{

    const deletedRole = await roleModel.findByIdAndDelete(req.params.id)

    res.json({
        message:"role deleted success",
        data:deletedRole
    })
}

const findRole = async (req,res)=>{
        const role= await roleModel.findById(req.params.id)

        res.json({
            messgae:"role that you wanted",
            data: role 
        })
}


module.exports ={
    getAllrole,addRole,deleteRole,findRole
}