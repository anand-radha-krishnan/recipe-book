import React, { useEffect, useState } from "react";

import { RecipePreview } from "./RecipePreview";
import { deleteRecipe, fetchRecipes } from "../api-client";
import Header from "./Header";
import { AddRecipe } from "./AddRecipe";

export const RecipeList = ({
  initialRecipes,
  onRecipeClick,
}) => {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [showAddRecipeForm, setShowAddRecipeForm] =
    useState(false);

  const toggleAddRecipeButton = () => {
    setShowAddRecipeForm(!showAddRecipeForm);
  };

  const refetchRecipes = () => {
    fetchRecipes().then((recipes) => {
      setRecipes(recipes);
    });
  };

  useEffect(() => {
    if (!recipes) {
      refetchRecipes();
    }
  }, []);

  const handleDeleteRecipe = (recipeId) => {
    deleteRecipe(recipeId).then((recipes) => {
      refetchRecipes();
    });
  };

  return (
    <>
      <Header message="Recipe book" />

      <div className="recipe-list">
        {recipes?.map((recipe) => {
          return (
            <RecipePreview
              key={recipe.id}
              recipe={recipe}
              onRecipeClick={onRecipeClick}
              onRecipeDelete={handleDeleteRecipe}
            />
          );
        })}
      </div>

      {!showAddRecipeForm && (
        <div className="add-new-recipe align-center">
          <button
            className="link"
            onClick={toggleAddRecipeButton}
          >
            Add new recipe
          </button>
        </div>
      )}

      {showAddRecipeForm && (
        <AddRecipe
          refetchRecipes={() => {
            toggleAddRecipeButton();
            refetchRecipes();
          }}
        />
      )}
    </>
  );
};
