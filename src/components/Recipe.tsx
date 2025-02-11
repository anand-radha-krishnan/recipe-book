import React, { useEffect, useState } from "react";
import { fetchRecipe } from "../api-client";
import Header from "./Header";

interface RecipeProps {
  initialRecipe: any;
  onRecipeListClick: () => void;
  children: any;
}

export const Recipe = ({
  initialRecipe,
  onRecipeListClick,
}: RecipeProps) => {
  const [recipe, setRecipe] = useState(initialRecipe);

  useEffect(() => {
    if (!recipe.name) {
      fetchRecipe(recipe.id).then((recipe) => {
        setRecipe(recipe);
      });
    }
  }, []);

  const handleClickRecipeList = (event) => {
    event.preventDefault();
    onRecipeListClick();
  };

  return (
    <div>
      <a
        href="/"
        className="link"
        onClick={handleClickRecipeList}
      >
        to recipe book
      </a>
      <Header message={recipe?.name} />
      <div className="recipe">
        <div className="title">Recipe</div>
        <div className="description">
          <h4>Ingredients: </h4> {recipe?.ingredients}
          <h4>Procedure: </h4> {recipe?.procedure}
        </div>
      </div>
    </div>
  );
};
