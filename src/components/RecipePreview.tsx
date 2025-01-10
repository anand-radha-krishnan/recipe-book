import React from "react";

interface RecipePreviewProps {
  //   TODO: Add type for recipe
  recipe: any;
  onRecipeClick: () => any;
}

export const RecipePreview: React.FC<RecipePreviewProps> = ({
  recipe,
  onRecipeClick,
  onRecipeDelete,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    onRecipeClick(recipe.id);
  };
  const handleDelete = (event) => {
    event.preventDefault();
    onRecipeDelete(recipe.id);
  };

  return (
    <div className="recipe-preview ">
      <div className="category">
        <div>{recipe.category}</div>
        <button className="link" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <div className="recipe link" onClick={handleClick}>
        {recipe.name}
      </div>
    </div>
  );
};
