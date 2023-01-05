import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:10

    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:10

    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true,
        trim:true,
        min:10,
        
    }
})

const User=mongoose.model('user',userSchema)
export default User;