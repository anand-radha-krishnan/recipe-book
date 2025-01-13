import { useState, useEffect } from "react";

import { RecipeList } from "./RecipeList";
import { Recipe } from "./Recipe";

const App = ({ initialData }) => {
  const [page, SetPage] = useState<"RecipeList" | "Recipe">(
    initialData.currentRecipe ? "Recipe" : "RecipeList",
  );
  const [currentRecipe, setCurrentRecipe] = useState<
    object | undefined
  >(initialData.currentRecipe);

  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.recipeId
        ? "Recipe"
        : "RecipeList";

      SetPage(newPage);
      setCurrentRecipe({ id: event.state?.recipeId });
    };
  }, []);

  const navigateToRecipe = (recipeId) => {
    window.history.pushState(
      { recipeId },
      "",
      `/recipe/${recipeId}`,
    );
    SetPage("Recipe");
    setCurrentRecipe({ id: recipeId });
  };

  const navigateToRecipeList = () => {
    window.history.pushState({}, "", `/`);
    SetPage("RecipeList");
    setCurrentRecipe({ id: undefined });
  };

  const pageContent = () => {
    switch (page) {
      case "RecipeList":
        return (
          <RecipeList
            initialRecipes={initialData.recipes}
            onRecipeClick={navigateToRecipe}
          />
        );

      case "Recipe":
        return (
          <Recipe
            initialRecipe={currentRecipe}
            onRecipeListClick={navigateToRecipeList}
          >
            recipe
          </Recipe>
        );

      default:
        break;
    }
  };

  return <div className="container">{pageContent()}</div>;
};

export default App;
