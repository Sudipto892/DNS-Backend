import express from "express";
import { GetMyDetails, Login, Logout, Register } from "../controllers/user.js";

const router=express.Router();

router.post("/users/register",Register);
router.post("/users/login",Login);
router.get("/users/me",GetMyDetails);
router.delete("/users/logout",Logout);

export default router;