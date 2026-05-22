import express from 'express';
import { getCurrentuser, registerUser, loginUser, updateProfile, changePassword,googleLogin } from '../controllers/userController.js';
import {authMiddleware} from '../middlewares/auth.js';


const userRouter=express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/google-login', googleLogin);
userRouter.post('/login',loginUser);

//protected routes
userRouter.get("/me",authMiddleware,getCurrentuser);
userRouter.put("/profile",authMiddleware,updateProfile);
userRouter.put("/password",authMiddleware,changePassword);

export default userRouter;