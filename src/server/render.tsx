import ReactDOMServer from "react-dom/server";

import { fetchRecipe, fetchRecipes } from "../api-client";
import App from "../components/App";

const serverRender = async (request) => {
  const { recipeId } = request.params;

  const initialData = recipeId
    ? { currentRecipe: await fetchRecipe(recipeId) }
    : { recipes: await fetchRecipes() };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData} />,
  );
  return { initialMarkup, initialData };
};

export default serverRender;
