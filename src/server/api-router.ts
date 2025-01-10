import express from "express";
import cors from "cors";

import { connectClient } from "./db";

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get("/recipes", async (req, res) => {
  const client = await connectClient();

  const recipes = await client
    .collection("Recipes")
    .find()
    .project({ id: 1, category: 1, name: 1, _id: 0 })
    .toArray();

  res.send({ recipes });
});

router.get("/recipe/:recipeId", async (req, res) => {
  const client = await connectClient();

  const recipe = await client
    .collection("Recipes")
    .findOne({ id: req.params.recipeId });

  res.send({ recipe });
});

router.post("/add-recipe", async (req, res) => {
  const client = await connectClient();

  const newRecipe = {
    id: req.body.name.replace(/\s/g, "-").toLowerCase(),
    name: req.body.name,
    category: req.body.category,
    ingredients: req.body.ingredients,
    procedure: req.body.procedure,
  };
  const response = await client
    .collection("Recipes")
    .insertOne(newRecipe);
  res.send(response);
});

router.delete("/recipe/:recipeId", async (req, res) => {
  const client = await connectClient();

  const recipes = await client
    .collection("Recipes")
    .deleteOne({ id: req.params.recipeId });

  res.send({ recipes });
});

export default router;
