import express from 'express';
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import { UserModel } from '../models/users.js';

const router = express.Router();

router.post("/register", async (req, res) => {
    const {username, password} = req.body;

    // Search in DB if user exist
    const user = await UserModel.findOne({username : username});
    // async await is used rather than .then catch...

    if(user)
    {
        // If user already exist....registration can't be done
        return res.json({message : "User already exist!!!!!"});
    }

    // else we create new user and add it to the database.

    // Hashing the password for security reasons
    const hashedPassword = await bcrypt.hash(password, 10);

    // Now adding the data into database using the schema we created
    const newUser = new UserModel({username : username, password : hashedPassword})
    
    // save the user
    await newUser.save();

    res.json({message : "User Registered Successfully"});
    console.log("User registered");
})

router.post("/login", async(req, res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username : username});

    if(!user)
    {
        return res.json({message : "User does'nt exist"});
    }

    // Since we can not unHash the hashed password at time of registration, here : we convert password given at
    // login time to hashedPassword. And then compare with the hashed value of password already stored in the db.
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid)
    {
        return res.json({message : "Incorrect Password baby"});
    }

    // Learn jwt...
    const token = jwt.sign({id : user._id}, "somesecret");
    // Sends this to the client side....
    res.json({token, userID : user._id});
})

export {router as userRouter};