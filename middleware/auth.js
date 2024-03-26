import jwt from "jsonwebtoken";

import { User } from "../models/user.js";
export const isAuthenticated=async(req,res,next)=>{
    const {token}=req.cookies;

    if(!token){
        return res.status(404).json({
            success:false,
            message:"Login First"
        })
    }
    const decoaded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=User.findById(decoaded._id);
    next();

}