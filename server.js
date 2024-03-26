import {app} from "./app.js"
import { connectDB } from "./data/db.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./data/config.env",
});


connectDB();


app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on PORT: ${process.env.PORT}`);
  })