import jwt from "jsonwebtoken";
import axios from 'axios'

export const sendCookie=(user,res,message,statuscode=200)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET);

    res.status(statuscode).cookie("token",token,{
        httpOnly:true,
        sameSite:"none",
        secure:true
    }).json({
        success:true,
        message
    })
}

export const GenerateAuthToken = (tenant, clientId, clientSecret, resource) => {
    const tokenUrl = `https://login.microsoftonline.com/${tenant}/oauth2/token`;

    
    const requestBody = {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        resource: resource
    };

    
    return new Promise((resolve, reject) => {
        
        axios.post(tokenUrl, new URLSearchParams(requestBody), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            const accessToken = response.data.access_token;
           
            resolve(accessToken);
        })
        .catch(error => {
            
            reject(error.message);
        });
    });
};