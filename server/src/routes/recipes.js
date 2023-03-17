import express from 'express';

import { UserModel } from '../models/users.js';
import { RecipesModel } from '../models/recipes.js'; // need to write .js

const router = express.Router();

router.get('/', async (req, res) => {
    try
    {
        const response = await RecipesModel.find({});
        res.json(response);
    }
    catch(err)
    {
        res.json(err);
    }
});

router.post('/', async(req, res) => {
    const recipe = new RecipesModel(req.body);

    try{
        const response = await recipe.save();
        res.json(response);
    }
    catch(err){
        res.json(err);
    }
})

router.put('/', async(req, res) => {
    try{
        const user = await UserModel.findById(req.body.userID);
        const recipe = await RecipesModel.findById(req.body.recipeID);

        user.savedRecipes.push(recipe);
        await user.save();
        res.json({savedRecipes : user.savedRecipes});
    }
    catch(err){
        console.error(err);
    }
})

router.get('/savedRecipes/ids', async(req, res) => {
    try{
        const user = await UserModel.findById(req.body.userID);
        res.json({savedRecipes : user?.savedRecipes});
    }
    catch(err){
        console.error(err);
    }
})

router.get('/savedRecipes', async(req, res) => {
    try{
        const user = await UserModel.findById(req.body.userID);
        const savedRecipes = await RecipesModel.find({
            _id : { $in : user.savedRecipes},
        });
        res.json({savedRecipes});
    }
    catch(err){
        res.error(err);
    }
})

export {router as recipesRouter};