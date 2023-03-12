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

    res.json(user);
})

export {router as userRouter};