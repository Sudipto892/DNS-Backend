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
    const tokenUrl = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;

    // Request body for token acquisition
    const requestBody = {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        resource: resource
    };

    // Return a Promise
    return new Promise((resolve, reject) => {
        // Obtain Authorization Token
        axios.post(tokenUrl, new URLSearchParams(requestBody), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => {
            const accessToken = response.data.access_token;
            // Resolve the Promise with the access token
            resolve(accessToken);
        })
        .catch(error => {
            // Reject the Promise with the error message
            reject(error.message);
        });
    });
};