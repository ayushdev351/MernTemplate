// It's better to use ES6 import export syntax in node while creating a frontend application
import express from 'express';
//To resolve any cors issue during communication
import cors from 'cors';
import mongoose from 'mongoose';

import { userRouter } from './routes/users.js';

const app = express();

//middlwears : Automatically run before every request....
app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

// Name of database which is being connected is 'recipes' -> written after mongodb.net here -:
mongoose.connect("mongodb+srv://mrayushchauhan351:xu0WHvV9E9gpje6Q@cluster0.0rhhg4g.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(5000, () => {
    console.log("Server running at port 5000");
})