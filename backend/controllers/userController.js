import User from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import admin from "../config/firebaseAdmin.js";
const JWT_SECRET = process.env.JWT_SECRET;
const TOKEN_EXPIRES = "24h";

const createToken=(userId)=>{
    return jwt.sign({id:userId},JWT_SECRET,{expiresIn:TOKEN_EXPIRES});
};

//register user
export async function registerUser(req,res){
    const {name,email,password} = req.body;
    if(!name || !email || !password){
        return res.status(400).json({success:false,message:"Please fill all the fields"});
    }
    if(!validator.isEmail(email)){
        return res.status(400).json({success:false,message:"Please enter a valid email"});
    }
    if(password.length < 6){
        return res.status(400).json({success:false,message:"Password must be at least 6 characters long"});
    }
    try{
        if(await User.findOne({email})){
            return res.status(409).json({success:false,message:"User already exists"});
        }
        const hashed=await bcrypt.hash(password,10);
        const user=await User.create({name,email,password:hashed});
        const token= createToken(user._id);
        res.status(201).json({
            success:true,
            message:"User registered successfully",
            token,
            user:{id:user._id,name:user.name,email:user.email}
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({success:false,message:"Server error"});
    }

}

//login user
export async function loginUser(req,res){
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({success:false,message:"Please fill all the fields"});
    }
    try{
        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({success:false,message:"User not found. check credentials"});
        }
        const Match=await bcrypt.compare(password,user.password);
        if(!Match){
            return res.status(401).json({success:false,message:"Invalid credentials"});
        }
        const token= createToken(user._id);
        res.status(200).json({
            success:true,message:"User logged in successfully",
            token,
            user:{id:user._id,name:user.name,email:user.email}
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({success:false,message:"Server error"});
    }
}

//to get login user details
export async function getCurrentuser(req,res){
    try{
        const user=await User.findById(req.user.id).select('name email');
        if(!user){
            return res.status(404).json({success:false,message:"User not found"});
        }
        res.json({success:true,user});
    }
    catch(err){
        console.error(err);
        res.status(500).json({success:false,message:"Server error"});
    }

}

//update user profile
export async function updateProfile(req,res){
    const {name,email} = req.body;
    if(!name||!email||!validator.isEmail(email)){
        return res.status(400).json({success:false,message:"Please provide valid name and email"});
    }
    try{
        const exists = await User.findOne({email,_id:{$ne:req.user.id}});
        if(exists){
            return res.status(409).json({success:false,message:"Email already in use by another user"});
        }
        const user = await User.findByIdAndUpdate(req.user.id,
            {name,email},
            {new:true , runValidators:true, select:"name email"});
        res.json({success:true,message:"Profile updated successfully",user});
    }
    catch(err){
        console.error(err);
        res.status(500).json({success:false,message:"Server error"});
    }
}

//to change user password
export async function changePassword(req,res){
    const {currentPassword,newPassword} = req.body;
    if(!currentPassword||!newPassword||newPassword.length < 8){
        return res.status(400).json({success:false,message:"Password invalid or too short."});
    }
    
    try{
        const user=await User.findById(req.user.id).select('password');
        if(!user){
            return res.status(404).json({success:false,message:"User not found"});
        }
        const Match=await bcrypt.compare(currentPassword,user.password);
        if(!Match){
            return res.status(401).json({success:false,message:"Invalid current password"});
        }
        user.password=await bcrypt.hash(newPassword,10);
        await user.save();
        res.json({success:true,message:"Password changed successfully"});
    }
    catch(err){
        console.error(err);
        res.status(500).json({success:false,message:"Server error"});
    }
}
// google login
export async function googleLogin(req, res) {
    const { token } = req.body;
    if (!token) {
        return res.status(400).json({ success: false, message: "Token is required" });
    }
    
    try {
        // Verify the ID Token received from frontend
        const decodedToken = await admin.auth().verifyIdToken(token);
        const { email, name } = decodedToken;

        // Find if user already exists in MongoDB
        let user = await User.findOne({ email });

        if (!user) {
            // If user is new, register them with a random password
            const hashedPassword = await bcrypt.hash(Math.random().toString(36), 10);
            user = await User.create({
                name: name || email.split("@")[0],
                email: email,
                password: hashedPassword
            });
        }

        // Generate custom application JWT
        const appToken = createToken(user._id);
        
        res.json({
            success: true,
            message: "User logged in successfully with Google",
            token: appToken,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        console.error("Firebase token verification failed:", error);
        res.status(401).json({ success: false, message: "Authentication failed" });
    }
}
