import express from 'express';
import { registration, login ,logOut} from '../controller/authController.js';

const authRoutes = express.Router()

authRoutes.post("/registration", registration)
authRoutes.post("/login",login);
authRoutes.get("/logout",logOut);

export default authRoutes;