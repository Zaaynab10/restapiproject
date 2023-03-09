const mongoose =require('mongoose')
const userSchema=new mongoose.Schema({
    name:{type:String,
        required:true,},
    fullName:{type:String,
        unique:true,
        required:true,},
    email:{type:String,
        unique:true,
        required:true,},
    age:{type:Number,
        required:true,},
})

const userModel=mongoose.model("userModel",userSchema)
module.exports=userModel