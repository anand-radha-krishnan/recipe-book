import axios from "axios";
import { API_SERVER_URL } from "./client-config";

export const fetchRecipes = async () => {
  const response = await axios.get(`${API_SERVER_URL}/recipes`);
  return response.data.recipes;
};

export const fetchRecipe = async (id: string) => {
  const response = await axios.get(
    `${API_SERVER_URL}/recipe/${id}`,
  );
  return response.data.recipe;
};

export const addNewRecipe = async ({
  newRecipeName,
  newRecipeIngredients,
  newRecipeCategory,
  newRecipeProcedure,
}) => {
  const response = await axios.post(
    `${API_SERVER_URL}/add-recipe`,
    {
      name: newRecipeName,
      ingredients: newRecipeIngredients,
      category: newRecipeCategory,
      procedure: newRecipeProcedure,
    },
  );
  return response.data.recipe;
};

export const deleteRecipe = async (id: string) => {
  const response = await axios.delete(
    `${API_SERVER_URL}/recipe/${id}`,
  );
  console.log(response);

  return response.data.recipe;
};
