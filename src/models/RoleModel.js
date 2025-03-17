const mongoose= require("mongoose")
const schema = mongoose.Schema;

const roleSchema = new schema ({

    name:{
        type:String
    },
    description:{
        type:String
    }
    //here we write the database schema
})

module.exports = mongoose.model("roles",roleSchema)