import { useTransition } from "react";

import { addNewRecipe } from "../api-client";

export const AddRecipe = ({ refetchRecipes }) => {
  const [isPending, startTransition] = useTransition();

  const clearForm = (event) => {
    event.target.reset();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    startTransition(async () => {
      const newRecipeName = event.target.newRecipeName?.value;
      const newRecipeIngredients =
        event.target.newRecipeIngredients?.value;
      const newRecipeCategory =
        event.target.newRecipeCategory?.value;
      const newRecipeProcedure =
        event.target.newRecipeProcedure?.value;

      await addNewRecipe({
        newRecipeName,
        newRecipeIngredients,
        newRecipeCategory,
        newRecipeProcedure,
      });

      refetchRecipes();

      clearForm(event);
    });
  };

  return (
    <div className="recipe">
      <div className="title">Add new recipe</div>
      <div className="body add-new-recipe">
        <form id="add-new-recipe-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newRecipeName">Recipe Name: </label>
            <input
              type="text"
              required
              id="newRecipeName"
              label="ds"
              placeholder="New recipe name"
            />
          </div>
          <div>
            <label htmlFor="newRecipeIngredients">
              Ingredients:
            </label>
            <input
              type="text"
              id="newRecipeIngredients"
              placeholder="Recipe Ingredients"
            />
          </div>
          <div>
            <label htmlFor="newRecipeCategory">
              Difficulty:
            </label>
            <select id="newRecipeCategory">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label htmlFor="newRecipeProcedure">
              Procedure:{" "}
            </label>
            <textarea
              id="newRecipeProcedure"
              placeholder="Recipe procedure"
            />
          </div>
          <button
            type="submit"
            className="link"
            disabled={isPending}
          >
            {isPending ? "Adding..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
