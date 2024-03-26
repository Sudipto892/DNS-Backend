import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    subscriptionid:{
        type:String,
        required:true,
        unique:true
    },
    clientid:{
        type:String,
        required:true,
        unique:true
    },
    client_secret:{
        type:String,
        required:true,
        unique:true
    },
    tenantId:{
        type:String,
        required:true,
        unique:true
    },
    Zone:{
        type:String,
        required:true,
        unique:true
    },
    resourcegroupname:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

export const User=mongoose.model("User",schema);